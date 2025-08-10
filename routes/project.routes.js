const express = require("express");
const router = express.Router();
const {
  createProject,
  viewProject,
} = require("../controllers/project.controllers");

router.post("/create", createProject);
router.get("/view", viewProject);

module.exports = router;
