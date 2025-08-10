const express = require("express");
const router = express.Router();
const {
  createProfile,
  getProfile,
  updateProfile,
} = require("../controllers/profile.controllers");

router.use(express.json());

router.post("/create", createProfile);
router.get("/view", getProfile);
router.put("/update", updateProfile);

module.exports = router;
