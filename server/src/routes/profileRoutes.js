import express from "express";
import {
  createProfile,
  getProfile,
  updateProfile,
  getProjectsBySkill,
  getTopSkills,
  searchProfile
} from "../controllers/profileController.js";

const router = express.Router();

// CRUD
router.post("/profile", createProfile);
router.get("/profile", getProfile);
router.put("/profile", updateProfile);

// Queries
router.get("/projects", getProjectsBySkill);   // ?skill=Node.js
router.get("/skills/top", getTopSkills);
router.get("/search", searchProfile);         // ?q=searchterm

export default router;
