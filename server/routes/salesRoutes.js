import express from "express";
import { getSales } from "../controllers/sales.js";

const router = express.Router();

router.get("/sales", getSales);
router.get("/product/:id", getProductDetails);

export default router;
