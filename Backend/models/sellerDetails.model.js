import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const sellerDetailsSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+\@.+\..+/, "Please fill a valid email address"]
    },
    tags: [{
        type: String
    }],
    phoneNumber: {
        type: String,
        required: [true, "Phone No. is required"]
    },
    address: {
        type: String
    },
    image: {
        type: String,
        default: null
    },
    coverImage: {
        type: String,
        default: null
    }
});


export const SellerDetails = mongoose.model("SellerDetails", sellerDetailsSchema);