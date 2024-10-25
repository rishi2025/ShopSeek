import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from "../utils/ApiError.js";
import { Seller } from "../models/seller.model.js";
import { uploadCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import jwt from "jsonwebtoken";

const generateAccessAndRefreshTokens = async (sellerId) => {
    try {

        const seller = await Seller.findById(sellerId);

        const accessToken = seller.generateAccessToken();
        const refreshToken = seller.generateRefreshToken();

        seller.refreshToken = refreshToken;
        await seller.save({ validateBeforeSave: false });

        return { refreshToken, accessToken };

    } catch (error) {
        console.log(error);
        throw new ApiError(500, "Something went wrong while generating Access and Refresh tokens...");
    }
};

const registerSeller = asyncHandler(async (req, res) => {

    // get seller details from frontend
    const { email, name, password } = req.body;


    // validation - not empty
    if (
        [email, name, password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required...");
    }

    // const existingsellername = seller.findOne({
    //     $or: [{ email }]
    // });


    // check if seller already exists: email
    const existingEmail = await Seller.findOne({
        email
    });

    if (existingEmail)
        throw new ApiError(409, `email is already registered.`);

    // create seller object - create entry in db
    const seller = await Seller.create({
        email,
        name,
        password,
    });


    // remove hashed password and refresh token field from response
    const createdSeller = await Seller.findById(seller._id).select(
        "-password -refreshTokens"
    );


    // check for seller creation
    if (!createdSeller)
        throw new ApiError(500, "Something went wrong while registering the seller...");


    // return response
    return res.status(201).json(
        new ApiResponse(200, createdSeller, "seller registered successfully !!!")
    )
});

// const saveSellerInformation = asyncHandler(async (req, res) => {
//     // check for images, check for avatar
//     const avatarLocalPath = req.files?.avatar[0]?.path;
//     let coverImageLocalPath;

//     if (req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0)
//         coverImageLocalPath = req.files?.coverImage[0].path;

//     if (!avatarLocalPath)
//         throw new ApiError(400, "Avatar file is required...");


//     // upload them to cloudinary, avatar
//     const avatar = await uploadCloudinary(avatarLocalPath);
//     const coverImage = await uploadCloudinary(coverImageLocalPath);

//     if (!avatar)
//         throw new ApiError(400, "Avatar file is required...");

// });

const loginSeller = asyncHandler(async (req, res) => {

    // data from request body
    const { email, password } = req.body;


    // sellername or email
    if (!email)
        throw new ApiError(400, "Email is required...");

    // find the seller
    const seller = await Seller.findOne({
        $or: [{ email }]
    });

    if (!seller)
        throw new ApiError(400, "seller does not exist...");


    // check password
    const checkPassword = await seller.isPasswordCorrect(password);

    if (!checkPassword)
        throw new ApiError(401, "Wrong Password...");

    // generate access and refresh tokens
    const { refreshToken, accessToken } = await generateAccessAndRefreshTokens(seller._id);


    // send cookies
    const loggedInSeller = await Seller.findById(seller._id).select("-password -refreshToken");
    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(
                200,
                {
                    seller: loggedInSeller,
                    accessToken,
                    refreshToken
                },
                "Seller Logged in successfully...",
            )
        )
});

const logoutSeller = asyncHandler(async (req, res) => {
    await Seller.findByIdAndUpdate(
        req.seller._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        }
    )

    const options = {
        httpOnly: true,
        secure: true
    }

    return res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(
            new ApiResponse(200, {}, "Logged out Successfully")
        )
});

const refreshAccessToken = asyncHandler(async (req, res) => {
    try {
        const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken;
    
        if (!incomingRefreshToken)
            throw new ApiError(401, "Unauthorized request...");
    
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFERSH_TOKEN_SECRET
        );
    
        const seller = await Seller.findById(decodedToken?._id);
    
        if (!seller)
            throw new ApiError(401, "Invalid refresh token...");
    
        if (incomingRefreshToken !== seller?.refreshToken)
            throw new ApiError(401, "Refresh token is expired or used...");
    
        const options = {
            httpOnly: true,
            secure: true
        }
    
        const { newRefreshToken, newAccessToken } = await generateAccessAndRefreshTokens(seller._id);
    
        return res
            .status(200)
            .cookie("accessToken", newAccessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                200,
                {
                    accessToken: newAccessToken,
                    refreshToken: newRefreshToken
                },
                "Access Token Refreshed Succesfully..."
            );
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid refresh token...");
    }
});

const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    const seller = await Seller.findById(req.seller?._id);
    const isValidPassword = await seller.isPasswordCorrect(oldPassword);

    if (!isValidPassword)
        throw new ApiError("Invalid old password");

    seller.password = newPassword;
    await Seller.save({ validateBeforeSave: false });

    return res.status(200)
        .json(new ApiResponse(
            200,
            {},
            "Password changed...",
        ))
});

const getCurrentSeller = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                req.seller,
                "Current seller fetched successfully"
            )
        );
});

const updateAccountDetails = asyncHandler(async (req, res) => {
    const { name, email } = req.body;

    if (!name && !email)
        throw new ApiError(400, "All fields are required...");

    const seller = await Seller.findByIdAndUpdate(
        req.seller?._id,
        {
            $set: {
                name,
                email,
            }
        },
        { new: true },
    ).select("-password -refreshToken");

    return res
        .status(200)
        .json(new ApiResponse(200, seller, "Account details updated..."));
});

const updateSellerAvatar = asyncHandler(async (req, res) => {
    const avatarLocalPath = req.file?.path;

    if (!avatarLocalPath)
        throw new ApiError(400, "Avatar not found...");

    const avatar = uploadCloudinary(avatarLocalPath);

    if (!avatar)
        throw new ApiError(500, "Error while uploading avatar...");

    const seller = await Seller.findByIdAndUpdate(
        req.seller?._id,
        {
            $set: {
                avatar: avatar.url,
            }
        },
        {
            new: true,
        }
    ).select("-password -refreshToken");

    return res.status(200)
        .json(
            new ApiResponse(200, seller, "Avatar updated successfully...")
    )
});

const updateSellerCoverImage = asyncHandler(async (req, res) => {
    const coverImageLocalPath = req.file?.path;

    if (!coverImageLocalPath)
        throw new ApiError(400, "CoverImage not found...");

    const coverImage = uploadCloudinary(coverImageLocalPath);

    if (!coverImage)
        throw new ApiError(500, "Error while uploading CoverImage...");

    const seller = await Seller.findByIdAndUpdate(
        req.seller?._id,
        {
            $set: {
                coverImage: coverImage.url,
            }
        },
        {
            new: true,
        }
    ).select("-password -refreshToken");

    return res.status(200)
        .json(
            new ApiResponse(200, seller, "Avatar updated successfully...")
    )
});

const getAllDeals = asyncHandler(async (req, res) => {
    const seller_email = req.body;

    const seller = await sellerDetailsSchema.findOne(
        email = seller_email
    );

    if (!seller) {
        ApiError(400, "Seller does not exist");
    }

    const deals = await PreviousDeals.findOne(
        seller_email,
    )

    return res.status(200)
        .json(
            new ApiResponse(200, [], "Deals fetched succesfully...")
        )
});

// //Seller_TotalCustomer

// const totalCustomer = asyncHandler(async (req, res) => {
//     const { email } = req.body;

//     // Ensure email is provided
//     if (!email) {
//         throw new ApiError(400, "Email is required.");
//     }

//     try {
//         // Check if the customer already exists by email
//         const existingCustomer = await Seller.findOne({ email });

//         if (!existingCustomer) {
//             // If customer doesn't exist, create a new entry
//             const newCustomer = new Seller({
//                 email,
//                 password: "defaultPassword"  // If password is needed in schema
//             });
//             await newCustomer.save();

//             // Get the total customer count
//             const TotalCustomerCount = await Seller.countDocuments();  // Count total Sellers

//             // Respond with the updated customer count
//             return res.status(201).json(
//                 new ApiResponse(201, { TotalCustomerCount }, "You have a new customer.")
//             );
//         } else {
//             // If customer already exists, return an appropriate response
//             return res.status(200).json(
//                 new ApiResponse(200, {}, "Customer already exists.")
//             );
//         }
//     } catch (error) {
//         // Handle error if any occurs during the customer registration
//         console.error("Error registering customer:", error.message);
//         throw new ApiError(500, `Failed to register customer. Reason: ${error.message}`);
//     }
// });

export {
    registerSeller,
    loginSeller,
    logoutSeller,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentSeller,
    updateAccountDetails,
    updateSellerAvatar,
    updateSellerCoverImage,
    getAllDeals,
    //totalCustomer,
};