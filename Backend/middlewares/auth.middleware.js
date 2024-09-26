import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";
import { Seller } from "../models/seller.model.js";

export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
    
        if (!token)
            throw new ApiError(401, "Unauthorised Request!");
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        const seller = await Seller.findById(decodedToken?._id).select("-password -refreshToken");
    
        if (!seller)
            throw new ApiError(400, "Invalid Access Token...");
    
        req.seller = seller;
        next();

    } catch (error) {
        throw new ApiError(401, error?.message || "Inavlid Access Token");
    }
})