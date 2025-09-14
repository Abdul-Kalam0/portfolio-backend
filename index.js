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

app.use("/users", profileRoutes);
app.use("/projects", projectRouters);
app.use("/contacts", contactRoutes);

//spotify
app.use("/spotify", spotifyRoutes);
app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to my Porfolio</h1> <h4>https://portfolio-backend-two-pied.vercel.app/spotify/auth/login</h4>`
  );
});

module.exports = app;
