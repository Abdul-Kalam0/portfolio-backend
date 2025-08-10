const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    bio: String,
    avatar: String, 
    location: String,
    email: String,
    phoneNo: Number,
    resumeUrl: String,
    socialLinks: {
      gitHub: String,
      linkedIn: String,
      portfolio: String,
    },
    skills: [String],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", profileSchema);
