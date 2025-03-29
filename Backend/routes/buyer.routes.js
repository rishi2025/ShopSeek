import { Router } from "express";
import express from "express";

import { registerBuyer, loginBuyer, getInDeals, logoutBuyer, refreshBuyerAccessToken, changeCurrentBuyerPassword, addProductRequest, updateBuyerImage, updateBuyerInfo } from "../controllers/buyer.controller.js";
//import { verifyJWT } from "../middlewares/auth.middleware.js";

const buyerRouter = Router();
buyerRouter.use(express.json());

buyerRouter.route("/register").post(registerBuyer);
buyerRouter.route("/login").post(loginBuyer);
buyerRouter.route("/update-buyer-info").post(updateBuyerInfo);
buyerRouter.route("/add-product").post(addProductRequest);
buyerRouter.route("/get-indeals").post(getInDeals);

export default buyerRouter;