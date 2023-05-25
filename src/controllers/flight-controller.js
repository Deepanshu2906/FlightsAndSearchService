const { FlightService } = require("../services/index");

const flightService = new FlightService();

const create = async (req, res) => {
  try {
    const flight = await flightService.createFlight(req.body);
    return res.status(201).json({
      data: flight,
      success: true,
      message: "Successfully created the flight",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to create flight",
      success: false,
      err: error,
    });
  }
};
const getAll = async (req, res) => {
  try {
    const flights = await flightService.getAllFlightData(req.query);
    return res.status(200).json({
      data: flights,
      success: true,
      message: "Successfully fetched  the flights",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      message: "Not able to fetch the flights",
      success: false,
      err: error,
    });
  }
};

module.exports = {
  create,
  getAll,
};
