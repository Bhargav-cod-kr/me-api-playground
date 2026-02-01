// import express from "express";
// import cors from "cors";
// import morgan from "morgan";
// import dotenv from "dotenv";

// import { connectDB } from "./config/db.js";
// import profileRoutes from "./routes/profileRoutes.js";

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));

// app.use("/api", profileRoutes);

// // Health Check API
// app.get("/api/health", (req, res) => {
//   res.status(200).json({
//     status: "OK",
//     uptime: process.uptime(),
//     timestamp: new Date()
//   });
// });


// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import profileRoutes from "./routes/profileRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// DB CONNECTION
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB connection failed:", error.message);
    process.exit(1);
  }
};

connectDB();

// ROUTES
// Root route (fixes "Cannot GET /")
app.get("/", (req, res) => {
  res.send("Me API Backend Running 🚀");
});

// Health check route (Render uses this)
app.get("/healthz", (req, res) => {
  res.status(200).send("OK");
});

// Profile API routes
app.use("/api/profile", profileRoutes);

// SERVER START
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


