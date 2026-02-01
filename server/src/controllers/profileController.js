import Profile from "../models/Profile.js";

// convert "Node.js" → "nodejs", "React JS" → "reactjs"
const normalize = (word) => word.toLowerCase().replace(/[\s.-]/g, "");

// skill relationships (real-world search logic)
const skillAliases = {
  js: ["javascript"],
  javascript: ["js"],
  node: ["nodejs"],
  nodejs: ["node"],
  react: ["reactjs"],
  reactjs: ["react"],
};

// CREATE PROFILE
export const createProfile = async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (err) {
    if (err.code === 11000)
      return res.status(400).json({ error: "Email already exists" });
    res.status(400).json({ error: err.message });
  }
};

// GET PROFILE
export const getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE PROFILE
export const updateProfile = async (req, res) => {
  try {
    const profile = await Profile.findOneAndUpdate({}, req.body, {
      new: true,
      runValidators: true,
    });
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET PROJECTS BY SKILL
export const getProjectsBySkill = async (req, res) => {
  try {
    const { skill } = req.query;
    if (!skill) return res.status(400).json({ error: "Skill required" });

    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    const query = normalize(skill);

    const projects = profile.projects.filter((p) =>
      (p.techStack || []).some((tech) => {
        const t = normalize(tech);

        if (t.includes(query)) return true;
        if (skillAliases[query]?.some((alias) => t.includes(alias))) return true;

        return false;
      })
    );

    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET TOP SKILLS
export const getTopSkills = async (req, res) => {
  try {
    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ error: "Profile not found" });
    res.json(profile.skills || []);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// SMART SEARCH
export const searchProfile = async (req, res) => {
  try {
    const { q } = req.query;
    if (!q) return res.status(400).json({ error: "Query required" });

    const profile = await Profile.findOne();
    if (!profile) return res.status(404).json({ error: "Profile not found" });

    const query = normalize(q);

    const projects = profile.projects.filter((p) =>
      p.title.toLowerCase().includes(q.toLowerCase()) ||
      p.description.toLowerCase().includes(q.toLowerCase()) ||
      (p.techStack || []).some((tech) => {
        const t = normalize(tech);

        if (t.includes(query)) return true;
        if (skillAliases[query]?.some((alias) => t.includes(alias))) return true;

        return false;
      })
    );

    const skills = profile.skills.filter((s) =>
      normalize(s).includes(query)
    );

    const nameMatch = normalize(profile.name).includes(query)
      ? profile.name
      : null;

    res.json({ name: nameMatch, skills, projects });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
