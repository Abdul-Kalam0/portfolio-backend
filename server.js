const server = require("./index");
const dbInitialization = require("./config/db");
const dotenv = require("dotenv");
dotenv.config();
dbInitialization();

let PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is connected to Port: ${PORT}`);
});
