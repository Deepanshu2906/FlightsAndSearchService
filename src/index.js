const express = require("express");
const bodyParser = require("body-parser");

const db = require("./models/index");
const { PORT } = require("./config/serverConfig");

const ApiRoutes = require("./routes/index");
const { Airport, City, Airplane } = require("./models/index");

const setupAndStartServer = async () => {
  // create the express obj
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  // every request that going to start with api
  app.use("/api", ApiRoutes);

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
    // 'include'  property how to use :
    // const airports = await Airport.findAll({
    //   include: [
    //     {
    //       model: City,
    //     },
    //   ],
    // });
    // console.log(airports);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alter: true });
    }
    // if custom data like all airports of a particular city
    // but we dont't want raw mysql query like 'join' , so here is the solution below:
    // const city = await City.findOne({
    //   where: {
    //     id: 8,
    //   },
    // });
    // // w/o db.sequelize.sync({ alter: true }); it will not parse airport
    // const airports = await city.getAirports();
    // console.log(city, "*************", airports);
    // we also create except seederd also
    // await Airplane.create({
    //   modelNumber: "Bombardier CRJ",
    // });
  });
};

setupAndStartServer();
