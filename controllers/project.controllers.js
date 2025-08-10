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

// const viewProject = async (req, res) => {
//   const { title } = req.body;
//   try {
//     if (!title) return res.status(400).json({ message: "Title is required." });
//     const project = await ProjectModel.findOne({ title });
//     if (!project)
//       return res.status(404).json({ message: "Project not found." });

//     res.status(200).json({
//       Title: project.title,
//       TechStack: project.techStack,
//       Description: project.description,
//     });
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Internal Server error", error: error.message });
//   }
// };

const viewProject = async (req, res) => {
  //const title = req.body.title;

  try {
    // No title → return all projects
    const projects = await ProjectModel.find();
    return res.status(200).json({
      message: "All projects fetched successfully",
      count: projects.length,
      projects,
    });
  } catch (error) {
    // Title provided → return single project
    // const project = await ProjectModel.findOne({ title });
    // if (!project) {
    //   return res.status(404).json({ message: "Project not found." });
    // }

    // res.status(200).json({
    //   Title: project.title,
    //   TechStack: project.techStack,
    //   Description: project.description,
    // });
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

module.exports = { createProject, viewProject };
