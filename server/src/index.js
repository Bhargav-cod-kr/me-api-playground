import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import profileRoutes from "./routes/profileRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors({
  origin: [
    "http://localhost:5173",   // local vite
    "http://localhost:3000",   // optional
    "https://me-api-playground-frontend-nrf2.onrender.com" // production frontend
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


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
app.get("/api/health", (req, res) => {
  res.status(200).send("OK");
});

// Profile API routes
app.use("/api/profile", profileRoutes);

// SERVER START
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});



