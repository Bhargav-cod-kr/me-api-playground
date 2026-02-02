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

router.post("/", createProfile);
router.get("/", getProfile);
router.put("/", updateProfile);

router.get("/projects", getProjectsBySkill);
router.get("/skills/top", getTopSkills);
router.get("/search", searchProfile);

export default router;
