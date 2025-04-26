import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from "../utils/ApiError.js";
import { Buyer } from '../models/buyer.model.js';
import { PreviousDeals } from '../models/previousDeals.model.js';
import { BuyerDetails } from "../models/buyerDetails.model.js";
import { uploadCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { OutDeals } from '../models/outDeals.model.js';

const generateBuyerAccessAndRefreshTokens = async (buyerId) => {
    try {

        const buyer = await Buyer.findById(buyerId);

        const accessToken = buyer.generateAccessToken();
        const refreshToken = buyer.generateRefreshToken();

        buyer.refreshToken = refreshToken;
        await buyer.save({ validateBeforeSave: false });

        return { refreshToken, accessToken };

    } catch (error) {
        console.log(error);
        throw new ApiError(500, "Something went wrong while generating Access and Refresh tokens...");
    }
};

const registerBuyer = asyncHandler(async (req, res) => {

    // get Buyer details from frontend
    const { email, name, password } = req.body;


    // validation - not empty
    if (
        [email, name, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required...");
    }

    // check if buyer already exists: email
    const existingEmail = await Buyer.findOne({
        email
    });

    if (existingEmail)
        throw new ApiError(409, `email is already registered.`);

    // create buyer object - create entry in db
    const buyer = await Buyer.create({
        email,
        name,
        password,
    });

    // remove hashed password and refresh token field from response
    const createdBuyer = await Buyer.findById(buyer._id).select(
        "-password -refreshTokens"
    );


    // check for buyer creation
    if (!createdBuyer)
        throw new ApiError(500, "Something went wrong while registering the buyer...");


    // return response
    return res.status(201).json(
        new ApiResponse(200, createdBuyer, "buyer registered successfully !!!")
    );
});

const loginBuyer = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email) throw new ApiError(400, "Email is required...");

    const buyer = await Buyer.findOne({ $or: [{ email }] });

    if (!buyer) throw new ApiError(400, "Buyer does not exist...");

    const checkPassword = await buyer.isPasswordCorrect(password);

    if (!checkPassword) throw new ApiError(401, "Wrong Password...");

    const { refreshToken, accessToken } = await generateBuyerAccessAndRefreshTokens(buyer._id);

    const loggedInBuyer = await Buyer.findById(buyer._id).select("-password -refreshToken");

    const options = {
        httpOnly: true,
        secure: true
    };

    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    buyer: loggedInBuyer,
                    accessToken,
                    refreshToken
                },
                "Buyer logged in successfully."
            )
        );
});

const logoutBuyer = asyncHandler(async (req, res) => {
    await Buyer.findByIdAndUpdate(
        req.buyer._id,
        { $set: { refreshToken: undefined } },
        { new: true }
    );

    const options = {
        httpOnly: true,
        secure: true
    };

    return res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "Logged out successfully."));
});

const refreshBuyerAccessToken = asyncHandler(async (req, res) => {
    try {
        const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;

        if (!incomingRefreshToken)
            throw new ApiError(401, "Unauthorized request...");

        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);

        const buyer = await Buyer.findById(decodedToken?._id);

        if (!buyer)
            throw new ApiError(401, "Invalid refresh token...");

        if (incomingRefreshToken !== buyer?.refreshToken)
            throw new ApiError(401, "Refresh token is expired or used...");

        const options = {
            httpOnly: true,
            secure: true
        };

        const { newRefreshToken, newAccessToken } = await generateBuyerAccessAndRefreshTokens(buyer._id);

        return res
            .status(200)
            .cookie("accessToken", newAccessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    { accessToken: newAccessToken, refreshToken: newRefreshToken },
                    "Access Token refreshed successfully."
                )
            );
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token...");
    }
});

const changeCurrentBuyerPassword = asyncHandler(async (req, res) => {
    const {buyerId, oldPassword, newPassword } = req.body;

    const buyer = await Buyer.findById(buyerId);
    const isValidPassword = await buyer.isPasswordCorrect(oldPassword);

    if (!isValidPassword)
        throw new ApiError("Invalid old password");

    buyer.password = newPassword;
    await buyer.save({ validateBeforeSave: false });

    return res.status(200)
        .json(new ApiResponse(
            200,
            {},
            "Password changed successfully."
        ));
});

function generateRandomId() {
    return Math.random().toString(36).substring(2, 15);
}

const addProductRequest = asyncHandler(async (req, res) => {

    const { buyer_email, buyer_product_picture, tags, title, description } = req.body;

    if (
        [buyer_email, title].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required...");
    }

    const product = await PreviousDeals.create({
        buyer_email,
        buyer_product_picture,
        tags,
        title,
        description
    });

    const createdProduct = await PreviousDeals.findById(product._id);

    if (!createdProduct)
        throw new ApiError(500, "Something went wrong while creating product request...");

    // return response
    return res.status(201).json(
        new ApiResponse(200, createdProduct, "Product Request Notification Sent !!!")
    );
});

const updateBuyerImage = asyncHandler(async (req, res) => {
    const imageLocalPath = req.file?.path; 

    if (!imageLocalPath) {
        throw new ApiError(400, "Image file is required.");
    }

    // Upload image to Cloudinary
    const image = await uploadCloudinary(imageLocalPath);

    // Check if the image upload was successful
    if (!image) {
        throw new ApiError(500, "Error while uploading image to Cloudinary.");
    }

    // Update buyer's image URL in the database
    const buyer = await Buyer.findByIdAndUpdate(
        req.buyer?._id, // Assuming buyer's ID is stored in req.buyer after authentication
        { $set: { profileImage: image.url } },
        { new: true }
    ).select("-password -refreshToken");

    // Check if buyer was found and updated
    if (!buyer) {
        throw new ApiError(404, "Buyer not found.");
    }

    // Return success response
    return res.status(200).json(
        new ApiResponse(200, buyer, "Image updated successfully.")
    );
});

const updateBuyerInfo = asyncHandler(async (req, res) => {
    const { buyerId, phoneNumber, address } = req.body;

    // Check if buyerId is provided
    if (!buyerId) {
        throw new ApiError(400, "Buyer ID is required.");
    }

    // Prepare update fields object
    const updateFields = {};
    if (phoneNumber) updateFields.phoneNumber = phoneNumber;
    if (address) updateFields.address = address;

    // Update buyer information
    const updatedBuyer = await Buyer.findByIdAndUpdate(
        buyerId,
        updateFields,
        { new: true, runValidators: true }
    ).select("-password -refreshToken");

    if (!updatedBuyer) {
        throw new ApiError(404, "Buyer not found.");
    }

    // Return response with updated buyer details
    return res.status(200).json(
        new ApiResponse(200, updatedBuyer, "Buyer information updated successfully.")
    );
});

const getInDeals = asyncHandler(async (req, res) => {
    const { buyerId } = req.body;

    if (!buyerId) {
        throw new ApiError(400, "Buyer ID is required.");
    }

    // Fetch products associated with the buyer
    const products = await PreviousDeals.find({ buyer_email: buyerId });

    if (!products || products.length === 0) {
        throw new ApiError(404, "No product-deals found for this buyer.");
    }

    const productIds = products.map(product => product._id.toString());

    const inDeals = await OutDeals.find({ product_id: { $in: productIds } });

    if (!inDeals || inDeals.length === 0) {
        throw new ApiError(404, "No in-deals found for this buyer.");
    }

    // Map in-deals with their corresponding product details
    const inDealsWithProductDetails = inDeals.map(inDeal => {
        const product = products.find(product => product._id.toString() === inDeal.product_id.toString());
        return {
            inDeal,
            product
        };
    });

    // Return response with in-deals and product details
    return res.status(200).json(
        new ApiResponse(200, inDealsWithProductDetails, "In-deals with product details fetched successfully.")
    );
});

export {
    registerBuyer,
    loginBuyer,
    logoutBuyer,
    refreshBuyerAccessToken,
    changeCurrentBuyerPassword,
    addProductRequest,
    updateBuyerImage,
    updateBuyerInfo,
    getInDeals
};