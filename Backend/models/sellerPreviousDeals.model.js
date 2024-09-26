import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const sellerProductsSchema = new Schema({

    name: {
        type: String,
        trim: true,
    },

    profilePic: {
        type: String,           // cloudinary url
    },

    email: {
        type: Schema.Types.ObjectId,
        ref: "Seller",
    },

    tags: [
        {
            type: String,
        }
    ],

    description: {
        type: String,
    },
},
    {
        timestamps: true
    }
);

export const SellerPreviousDeals = mongoose.model("SellerPreviousDeals", sellerProductsSchema);