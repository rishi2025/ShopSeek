import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from "../utils/ApiError.js";
import { Seller } from "../models/seller.model.js";
import { ApiResponse } from '../utils/ApiResponse.js';
import { PreviousDeals } from '../models/previousDeals.model.js';

const getProductRequests = asyncHandler(async (req, res) => {
    const { sellerEmail } = req.body;

    if (!sellerEmail) {
        throw new ApiError(400, "Email not found");
    }

    const seller = await Seller.findOne({ email: sellerEmail }).select('tags').lean();
    if (!seller || !seller.tags) {
        throw new ApiError(404, "Seller not found or seller tags not available");
    }

    const productRequests = await PreviousDeals.find({
        tags: { $in: seller.tags },  
        status: "Pending"           
    })
    .select('buyer_product_picture title tags')
    .lean();

    if (!productRequests) {
        throw new ApiError(500, "Internal Server Error, could not fetch product requests");
    }

    return res.status(200)
        .json(new ApiResponse(
            200,
            { productRequests },
            "Product requests fetched successfully."
        ));
});

export {
    getProductRequests,
};
