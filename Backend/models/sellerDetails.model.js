import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const sellerDetailsSchema = new Schema({

    email: {
        type: Schema.Types.ObjectId,
        ref: "Seller"
    },

    tags: [{
        type: String
    }],

    phoneNumber: {
        type: String,
        required: [true,"Phone No. is required"]
    },

    address: {
        type: String
    },

    image: {
        type: String, // URL of the image
        default: null
      },

    coverImage: {
        type: String, // URL of the cover image
        default: null
      },
}
);

export const SellerDetails = mongoose.model("SellerDetails", sellerDetailsSchema);