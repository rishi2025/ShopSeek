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
        ref: "Seller",
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
},
    {
        timestamps: true
    }
);

export const OutDeals = mongoose.model("OutDeals", outDealsSchema);