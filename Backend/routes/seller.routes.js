import { Router } from "express";
import express from "express";
import { loginSeller, logoutSeller, refreshAccessToken, registerSeller } from "../controllers/seller.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const sellerRouter = Router();
sellerRouter.use(express.json());

sellerRouter.route("/register").post(registerSeller);

sellerRouter.route("/login").post(loginSeller);

//secured routes
sellerRouter.route("/logout").post(verifyJWT, logoutSeller);
sellerRouter.route("/refresh-token").post(refreshAccessToken);

export default sellerRouter;