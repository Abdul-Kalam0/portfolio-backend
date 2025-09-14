const express = require("express");
const router = express.Router();
const {
  createProfile,
  getProfile,
  updateProfile,
} = require("../controllers/profile.controllers");

router.use(express.json());

router.post("/profile", createProfile);
router.get("/profile", getProfile);

module.exports = router;
