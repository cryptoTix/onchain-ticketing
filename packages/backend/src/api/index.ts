import express from "express";
import moviesRouter from "./movies";
import sellersRouter from "./sellers";
import seatLayoutRouter from "./seatLayout";
import userRouter from "./user";
import platformRouter from "./platform"

const router = express.Router();

router.use("/movies", moviesRouter);
router.use("/sellers", sellersRouter);
router.use("/seatlayout", seatLayoutRouter)
router.use("/fetchOrders", userRouter)
router.use("/cities", platformRouter)

export default router;
