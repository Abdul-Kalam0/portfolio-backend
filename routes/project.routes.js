const express = require("express");
const router = express.Router();
const {
  createProject,
  getProjects,
} = require("../controllers/project.controllers");

router.post("/", createProject);
router.get("/", getProjects);

module.exports = router;
