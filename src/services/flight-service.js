const { FlightRepository, AirplaneRepository } = require("../repository/index");
const { compareTime } = require("../utils/helper");

class FlightService {
  constructor() {
    this.airplaneRepository = new AirplaneRepository();
    this.flightRepository = new FlightRepository();
  }
  async createFlight(data) {
    try {
      // for flight we need airplane
      if (!compareTime(data.arrivalTime, data.departureTime)) {
        throw { error: "Arrival time can't be less than departure time" };
      }
      const airplane = await this.airplaneRepository.getAirplane(
        data.airplaneId
      );
      const flight = await this.flightRepository.createFlight({
        ...data,
        totalSeats: airplane.capacity,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong with the service layer");
      throw { error };
    }
  }
  async getAllFlightData(data) {
    try {
      const flights = await this.flightRepository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong with the service layer");
      throw { error };
    }
  }
}
/**
 * {
 *  flightNumber,
 * airplaneId,
 * departureAirportId,
 * arrivalAirportId,
 * departureTime,  format "2023-06-29T13:30:00"
 * arrivalTime,
 * price,
 * totalSeats -> from airplane\
 *
 * }
 */
module.exports = FlightService;
