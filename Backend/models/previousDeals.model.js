import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const previousDealsSchema = new Schema({

    seller_email: {
        type: Schema.Types.ObjectId,
        ref: "Seller",
        default: "Null",
    },

    buyer_email: {
        type: Schema.Types.ObjectId,
        ref: "Seller",
        default: "Null",
    },

    seller_product_picture: {
        type: String,                  // cludinary url
    },

    buyer_product_picture: {
        type: String,                  // cludinary url
    },

    tags: [
        {
            type: String,
        }
    ],

    price: {
        type: String,
    },

    title: {
        type: String,
    },

    rating: {
        type: Number,
    },

    review: {
        type: String,
    },
},
    {
        timestamps: true
    }
);

export const PreviousDeals = mongoose.model("PreviousDeals", previousDealsSchema);