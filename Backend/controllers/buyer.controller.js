import { ApiError } from "../utils/ApiError.js";
import { Buyer } from '../models/buyer.model.js';

const generateAccessAndRefreshTokens = async (buyerId) => {
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
        new ApiResponse(200, createdSeller, "buyer registered successfully !!!")
    )
});

export {
    registerBuyer
};