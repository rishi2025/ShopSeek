import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const sellerSchema = new Schema({

    email: {
        type: String,
        required: [true, 'Email is required...'],
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },

    name: {
        type: String,
        trim: true,
    },

    password: {
        type: String,
        required: [true, 'Password is required...'],
        isModified: false,
    },

    refreshToken: {
        type: String,
    },
},
    {
        timestamps: true
    }
);

sellerSchema.pre("save", async function next() {

    if (!this.isModified("password"))
        return next();

    this.password = bcrypt.hash(this.password, 10);
    next();
});

sellerSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

sellerSchema.methods.generateAccessToken = function () {
    jwt.sign(
        {
            _id: this._id,
            email: this.email,
            name: this.name
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: ACCESS_TOKEN_EXPIRY
        }
    )
}

sellerSchema.methods.generateRefreshToken = function () {
    jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: REFRESH_TOKEN_EXPIRY
        }
    )
}

export const Seller = mongoose.model("Seller", sellerSchema);