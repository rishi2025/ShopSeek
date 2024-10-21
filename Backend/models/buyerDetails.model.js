import mongoose, { Schema } from "mongoose";

const buyerDetailsSchema= new Schema({

    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },

    address: {
        type: String,
        required: true,
        trim: true
    },

    phoneNumber: {
        type: String,
        required: true,
        trim: true 
    },

    tags: {
        type: [String],
        default: []
    },

    image: {
        type: String
    }
},
    {
        timestamps: true
    }
);

export const BuyerDetails = mongoose.model("BuyerDetails", buyerDetailsSchema);