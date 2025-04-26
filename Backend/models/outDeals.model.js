import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const outDealsSchema = new Schema({

    seller_email: {
        type: Schema.Types.ObjectId,
        ref: "Seller",
        default: "Null",
    },

    product_id: {
        type: Schema.Types.ObjectId,
        ref: "PreviousDeals",
        default: "Null",
    },

    seller_product_picture: {
        type: String,                  // cludinary url
    },

    price: {
        type: Number,
    },

    description: {
        type: String,
    },

    status: {
        type: String,
        enum: ["Pending", "Confirmed", "Rejected", "Delivered"],
        default: "Pending",
        require: true,
    },
},
    {
        timestamps: true
    }
);

export const OutDeals = mongoose.model("OutDeals", outDealsSchema);