import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import jobsRoutes from "./routes/jobs.routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

app.use("/api/jobs", jobsRoutes);

app.get("/", (req, res) => {
  res.send("Job Tracker API running 🚀");
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

import { errorHandler } from "./middlewares/error.middleware.js";

app.use(errorHandler);

