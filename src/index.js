const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");

const setupAndStartServer = async () => {
  const app = express();
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`Server started on ${PORT} ---------------`);
    //     console.log(process.env);
  });
};
setupAndStartServer();
