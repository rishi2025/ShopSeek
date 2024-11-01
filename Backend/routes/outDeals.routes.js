import { Router } from "express";
import express from "express";
import { createDeal, getOutGoingDeals } from "../controllers/outDeals.controller.js";

const outDealRouter = Router();
outDealRouter.use(express.json());

outDealRouter.route("/create-deal").post(createDeal);
outDealRouter.route("/out-going").post(getOutGoingDeals);

// //secured routes
// outDealRouter.route("/logout").post(verifyJWT, logoutSeller);      // not tested
// outDealRouter.route("/refresh-token").post(refreshAccessToken);

export default outDealRouter;