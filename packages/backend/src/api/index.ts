import express from "express";
import moviesRouter from "./movies";
import sellersRouter from "./sellers";
import seatLayoutRouter from "./seatLayout";
import userRouter from "./user";

const router = express.Router();

router.use("/movies", moviesRouter);
router.use("/sellers", sellersRouter);
router.use("/seatlayout", seatLayoutRouter)
router.use("/fetchOrders", userRouter)

export default router;
