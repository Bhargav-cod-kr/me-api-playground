import mongoose from "mongoose";

const EducationSchema = new mongoose.Schema({
  institute: { type: String, required: true },
  degree: { type: String, required: true },
  year: { type: Number, required: true }
});

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  links: [{ type: String }],
  techStack: [{ type: String }]
});

const WorkSchema = new mongoose.Schema({
  company: { type: String },
  role: { type: String },
  duration: { type: String }
});

const LinksSchema = new mongoose.Schema({
  github: { type: String },
  linkedin: { type: String },
  portfolio: { type: String }
});

const ProfileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    education: [EducationSchema],
    skills: [{ type: String }],
    projects: [ProjectSchema],
    work: [WorkSchema],
    links: LinksSchema
  },
  { timestamps: true }
);

export default mongoose.model("Profile", ProfileSchema);
