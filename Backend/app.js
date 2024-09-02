import express, { urlencoded } from "express";
// import { S_LIMIT } from "./constants.js";
import cors from "cors";
// import cookieParser from "cookie-parser";

const app = express();

//------ MIDDLEWARES -------

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}));


export { app };