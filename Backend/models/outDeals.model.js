import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const outDealsSchema = new Schema({

    buyer_email: {
        type: Schema.Types.ObjectId,
        ref: "Buyer",
        default: "Null",
    },

    buyer_product_picture: {
        type: String,                  // cludinary url
    },

    tags: [
        {
            type: String,
        }
    ],

    title: {
        type: String,
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