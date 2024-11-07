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