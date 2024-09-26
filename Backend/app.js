import express, { urlencoded } from "express";
// import { S_LIMIT } from "./constants.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { S_LIMIT } from "./constants.js";

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

// routes declaration
app.use("/api/v1/sellers", sellerRouter);

export { app };