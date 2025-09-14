const ProjectModel = require("../models/project.model");

const createProject = async (req, res) => {
  const { title } = req.body;
  try {
    const existingProject = await ProjectModel.findOne({ title });
    if (existingProject)
      res.status(409).json({ message: "Project already exist." });

    const newProject = await ProjectModel.create(req.body);
    res
      .status(201)
      .json({ message: "Project created Successfully", Project: newProject });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    return res.status(200).json({
      message: "Projects",
      count: projects.length,
      projects,
    });
    res.status(200).json({ message: "Projects fetched successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { createProject, getProjects };
