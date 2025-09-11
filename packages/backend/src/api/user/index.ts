import express from "express";
import { fetchOrders } from "./controller";

const router = express.Router();

router.get("/", fetchOrders);

export default router;
