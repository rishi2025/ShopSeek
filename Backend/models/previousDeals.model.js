import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const previousDealsSchema = new Schema({

    seller_email: {
        type: Schema.Types.ObjectId,
        ref: "Seller",
        default: null,
    },

    buyer_email: {
        type: Schema.Types.ObjectId,
        ref: "Seller",
        default: null,
    },

    seller_product_picture: {
        type: String,                  // cludinary url
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANo-Image-Placeholder.svg&psig=AOvVaw1i9JdbfjH73xfvhHkrJ0lo&ust=1731487509140000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLC2mOOz1okDFQAAAAAdAAAAABAE",
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

    status: {
        type: String,       // Pending, Confirm, Delivered
        default: "Pending",
        require: true,
    },

    description: {
        type: String, 
    },

    size: {
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