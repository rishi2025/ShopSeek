import { Router } from "express";
import express from "express";
import { getTotalOrders, updateOrCreateSellerInformation, loginSeller, logoutSeller, refreshAccessToken, registerSeller } from "../controllers/seller.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const sellerRouter = Router();
sellerRouter.use(express.json());

sellerRouter.route("/register").post(registerSeller);
sellerRouter.route("/login").post(loginSeller);
//sellerRouter.route("/sellerInformation").post(updateOrCreateSellerInformation);   //tested
//sellerRouter.route("/total-orders").post(getTotalOrders);        //tested
//secured routes
sellerRouter.route("/logout").post(verifyJWT, logoutSeller);      // not tested
sellerRouter.route("/refresh-token").post(refreshAccessToken);

export default sellerRouter;