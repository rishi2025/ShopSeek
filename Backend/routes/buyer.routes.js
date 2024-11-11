import { Router } from "express";
import express from "express";

import { registerBuyer, loginBuyer, logoutBuyer, refreshBuyerAccessToken, changeCurrentBuyerPassword, addProductRequest, updateBuyerImage, updateBuyerInfo } from "../controllers/buyer.controller.js";
//import { verifyJWT } from "../middlewares/auth.middleware.js";

const buyerRouter = Router();
buyerRouter.use(express.json());

buyerRouter.route("/register").post(registerBuyer);
buyerRouter.route("/login").post(loginBuyer);
buyerRouter.route("/updateBuyerInfo").post(updateBuyerInfo);

export default buyerRouter;