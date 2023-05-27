const { FlightService } = require("../services/index");
const { SucessCodes } = require("../utils/error-codes");
const flightService = new FlightService();

const create = async (req, res) => {
  try {
    // desturing as I dont want any other random stuff send by client to expose to my service layer
    const flightRequestData = {
      flightNumber: req.body.flightNumber,
      airplaneId: req.body.airplaneId,
      departureAirportId: req.body.departureAirportId,
      arrivalAirportId: req.body.arrivalAirportId,
      arrivalTime: req.body.arrivalTime,
      departureTime: req.body.departureTime,
      price: req.body.price,
    };
    const flight = await flightService.createFlight(flightRequestData);
    return res.status(SucessCodes.CREATED).json({
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
