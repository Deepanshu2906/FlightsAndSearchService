const express = require("express");
const bodyParser = require("body-parser");

const db = require("./models/index");
const { PORT } = require("./config/serverConfig");
const CityRepository = require("./repository/city-repository");

const setupAndStartServer = async () => {
  // create the express obj
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, async () => {
    console.log(`Server started on ${PORT} ---`);
    // console.log(process.env);
    // inside db obj  we have City moodel
    // console.log(db.City);
    /* db.City.create({
    /   name: "New Delhi",
    });
    // or we write our logic in repository then use
    */
    // const repo = new CityRepository();
    // repo.createCity({ name: "Kolkata" });
  });
};

setupAndStartServer();
