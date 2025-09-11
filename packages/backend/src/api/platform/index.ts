import express from "express";
import { fetchCities } from "./controller";

const router = express.Router();

router.get("/", fetchCities);

export default router;
