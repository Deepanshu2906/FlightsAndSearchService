const { AirportService } = require("../services/index");

const airportService = new AirportService();

const create = async (req, res) => {
  try {
    const airport = await airportService.createAirport(req.body);
    return res.status(201).json({
      data: airport,
      success: true,
      message: "Succesfully created a airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Not able to created the airport",
    });
  }
};
// DELETE -> /airport/:id
const destroy = async (req, res) => {
  try {
    const response = await airportService.deleteAirport(req.params.id);
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully deleted the airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Not able to delete the airport",
    });
  }
};

// GET ->/ city/:id
const get = async (req, res) => {
  try {
    const airport = await airportService.getAirport(req.params.id);
    return res.status(200).json({
      data: airport,
      message: "Succesfully fetch the airport",
      err: {},
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Not able to fetch a airport",
    });
  }
};

// PATCH -> /airport/:id -> req.body (parameters)
const update = async (req, res) => {
  try {
    const response = await airportService.updateAirport(
      req.params.id,
      req.body
    );
    return res.status(200).json({
      data: response,
      success: true,
      message: "Successfully updated the airport",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Not able to update the airport",
    });
  }
};

const getAll = async (req, res) => {
  try {
    const airports = await airportService.getAllAirports(req.query);
    return res.status(200).json({
      data: airports,
      success: true,
      message: "Successfully fetched all airports",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      err: error,
      message: "Not able to fetch the airports",
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
  update,
  getAll,
};
