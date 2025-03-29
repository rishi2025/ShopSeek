import { Router } from "express";
import express from "express";

import {
    getTotalOrders,
    updateSellerInformation,
    loginSeller, logoutSeller,
    refreshAccessToken,
    registerSeller,
    getCurrentSeller,
    acceptProductRequest
} from "../controllers/seller.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const sellerRouter = Router();
sellerRouter.use(express.json());

sellerRouter.route("/register").post(registerSeller);
sellerRouter.route("/login").post(loginSeller);
sellerRouter.route("/update-seller-information").post(updateSellerInformation);   //tested
sellerRouter.route("/total-orders").post(getTotalOrders);        //tested
sellerRouter.route("/current-seller-info").post(getCurrentSeller); 
sellerRouter.route("/accept-product-request").post(acceptProductRequest); 

//secured routes
sellerRouter.route("/logout").post(verifyJWT, logoutSeller);      // not tested
sellerRouter.route("/refresh-token").post(refreshAccessToken);

export default sellerRouter;