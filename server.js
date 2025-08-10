const server = require("./index");
require("./config/db");
const dotenv = require("dotenv");
dotenv.config();

let PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is connected to Port: ${PORT}`);
});
