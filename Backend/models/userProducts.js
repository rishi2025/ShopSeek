import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const userProductsSchema = new Schema({

    name: {
        type: String,
        trim: true,
    },

    profilePic: {
        type: String,           // cloudinary url
    },

    user_id: {
        type: Schema.Types.ObjectId,
        ref: "User",
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

export const User = mongoose.model("User", userProductsSchema);