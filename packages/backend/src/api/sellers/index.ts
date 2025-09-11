import express from "express";
import { fetchSeatLayout, fetchSellers, fetchSellerShowId, fetchSupportedCurrencies, getBookingMetadata, validateMetadata } from "./controller";

const router = express.Router();

router.get("/", fetchSellers);
router.get("/seatlayout", fetchSeatLayout);
router.get("/showDetails", fetchSellerShowId);
router.get("/supportedNetworks", fetchSupportedCurrencies);
router.post("/validateMetadata", validateMetadata)
router.get("/fetchBookingMetadata", getBookingMetadata)
export default router;
