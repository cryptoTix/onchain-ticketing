import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import api from "./api";
import { paymetSyncerCron } from "./cron/paymentStatusSyncer";

dotenv.config();
const app = express();
const PORT = (process.env.PORT || 4000) as number;

app.use(cors());
app.use(express.json());

app.use("/api", api);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}/api`);
});

paymetSyncerCron.Start();