import express, { urlencoded } from "express";
// import { S_LIMIT } from "./constants.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { S_LIMIT } from "./constants.js";
import { upload } from "./middlewares/multer.middleware.js";
import { uploadCloudinary } from "./utils/cloudinary.js";


const app = express();

//------ MIDDLEWARES -------

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));

app.use(express.json({
    limit: S_LIMIT
}));

//--------- ROUTES ---------
// routes import
import sellerRouter from './routes/seller.routes.js';
import outDealRouter from "./routes/outDeals.routes.js";
import productRequestsRoute from "./routes/productRequests.routes.js";
import buyerRouter from "./routes/buyer.routes.js";


// routes declaration
app.use("/api/v1/seller", sellerRouter);
app.use("/api/v1/seller", outDealRouter);
app.use("/api/v1/seller", productRequestsRoute);

app.use("/api/v1/buyer", buyerRouter);

app.use('/api/v1/upload', upload.single('image'), async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }

        const cloudinaryResponse = await uploadCloudinary(req.file.path);

        if (!cloudinaryResponse) {
            return res.status(500).json({ error: 'Failed to upload to Cloudinary' });
        }

        res.json({ url: cloudinaryResponse.secure_url });

    } catch (error) {
        console.error('Error during file upload:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

export { app };