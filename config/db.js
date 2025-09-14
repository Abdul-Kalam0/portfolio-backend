const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbInitialization = async () => {
  await mongoose
    .connect(process.env.DB_URI)
    .then(() => console.log("DB is connected."))
    .catch((error) => console.error("Can't connect to DB.", error));
};

module.exports = dbInitialization;
