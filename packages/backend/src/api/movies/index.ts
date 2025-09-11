import express from "express";
import { fetchMovies } from "./controller";

const router = express.Router();

router.get("/", fetchMovies);

export default router;
