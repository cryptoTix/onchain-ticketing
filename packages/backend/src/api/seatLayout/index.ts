import express from "express";
import { fetchSeatLayout } from "./controller";

const router = express.Router();

router.get("/", fetchSeatLayout);

export default router;
