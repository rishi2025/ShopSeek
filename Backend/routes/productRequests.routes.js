import { Router } from "express";
import express from "express";
import { getProductRequests } from "../controllers/productRequests.controller.js";

const productRequestsRoute = Router();
productRequestsRoute.use(express.json());

productRequestsRoute.route("/product-requests").post(getProductRequests);

export default productRequestsRoute;