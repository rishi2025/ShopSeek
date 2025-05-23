import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from "../utils/ApiError.js";
import { PreviousDeals } from "../models/previousDeals.model.js";
import { Seller } from "../models/seller.model.js";
import { Buyer } from "../models/buyer.model.js";
import { uploadCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { OutDeals } from '../models/outDeals.model.js';

const getOutGoingDeals = asyncHandler(async (req, res) => {
    const { sellerEmail } = req.body;

    if (!sellerEmail) {
        throw new ApiError(400, "Email not found");
    }

    const outGoingDeals = await OutDeals.find({
        seller_email: sellerEmail,
        $or: [
            { status: "Confirmed" },
            { status: "Pending" }
        ]
    });

    if (!outGoingDeals) {
        throw new ApiError(500, "Internal Server Error, could not fetch OutDeals");
    }

    const productIds = outGoingDeals?.map(deal => deal.product_id);
    const previousDeals = await PreviousDeals.find({
        _id: { $in: productIds }
    });

    const buyerEmails = previousDeals?.map(deal => deal.buyer_email);
    const buyers = await Buyer.find({
        _id: { $in: buyerEmails }
    });

    const sellers = await Seller.find({
        _id: sellerEmail
    });

    const enrichedOutGoingDeals = outGoingDeals.map(deal => {
        const correspondingPreviousDeal = previousDeals?.find(prevDeal => prevDeal._id.toString() === deal.product_id.toString());
        const buyerDetails = buyers?.find(buyer => buyer._id.toString() === correspondingPreviousDeal?.buyer_email.toString());
        const sellerDetails = sellers?.find(seller => seller._id.toString() === sellerEmail);

        return {
            ...deal.toObject(),
            productDetails: correspondingPreviousDeal ? {
                ...correspondingPreviousDeal.toObject(),
                buyerDetails: buyerDetails || null,
                sellerDetails: sellerDetails || null
            } : null
        };
    });

    return res.status(200)
        .json(new ApiResponse(
            200,
            enrichedOutGoingDeals,
            "OutgoingDeals and PreviousDeals are fetched successfully...",
        ));
});

const createDeal = asyncHandler(async (req, res) => {
    const { sellerEmail, buyerEmail, sellerProductPicture, buyerProductPicture,
        tags, price, status, title, rating, review } = req.body;

    if (!sellerEmail) {
        throw new ApiError(400, "Bad Request - Seller Email not found while creating the deal.");
    }

    if (!buyerEmail) {
        throw new ApiError(400, "Bad Request - Seller Email not found while creating the deal.");
    }

    if (!sellerProductPicture) {
        throw new ApiError(400, "Bad Request - No Seller Product Picture found.");
    }

    if (!buyerProductPicture) {
        throw new ApiError(400, "Bad Request - No Buyer Product Picture found.");
    }

    if (!tags) {
        throw new ApiError(400, "Bad Request - Product should have atleast 1 tag.");
    }

    if (!price || !status) {
        throw new ApiError(400, "Bad Request - Price not found or Deal was not confirmed.");
    }

    const seller = await Seller.findOne({ email: sellerEmail });
    const buyer = await Seller.findOne({ email: buyerEmail });
    console.log(buyer);

    if (!seller) {
        throw new ApiError(404, `Seller with email ${sellerEmail} not found.`);
    }

    if (!buyer) {
        throw new ApiError(404, `Buyer with email ${buyerEmail} not found.`);
    }

    const currentDeal = PreviousDeals.create = await PreviousDeals.create({
        seller_email: seller._id,
        buyer_email: buyer._id,
        seller_product_picture: sellerProductPicture,
        buyer_product_picture: buyerProductPicture,
        tags,
        price,
        status,
        title,
        rating,
        review,
    });

    const CurrentCompletedDeal = await PreviousDeals.findById(currentDeal._id);

    if (!CurrentCompletedDeal)
        throw new ApiError(500, "Something went wrong while completing deal")


    // return response
    return res.status(201).json(
        new ApiResponse(200, currentDeal, "Deal Recorded Successfully...")
    );
})



export {
    getOutGoingDeals,
    createDeal,
}