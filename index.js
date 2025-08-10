const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const profileRoutes = require("./routes/profile.routes");
const projectRouters = require("./routes/project.routes");
const contactRoutes = require("./routes/contact.route");
const spotifyRoutes = require("./routes/spotify.routes");

app.use(express.json());
app.use(cors());

app.use("/user/profile", profileRoutes);
app.use("/user/projects", projectRouters);
app.use("/user/contact", contactRoutes);

//spotify
app.use("/spotify", spotifyRoutes);
app.get("/", (req, res) => {
  res.send("Welcome to my Portfolio");
});

module.exports = app;
