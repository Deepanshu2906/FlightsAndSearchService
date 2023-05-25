const { Op } = require("sequelize");
const { Flights } = require("../models/index");

class FlightRepository {
  //  creting private function to class
  #createFilter(data) {
    let filter = {};
    if (data.arrivalAirportId) {
      filter.arrivalAirportId = data.arrivalAirportId;
    }
    if (data.departureAirportId) {
      filter.departureAirportId = data.departureAirportId;
    }
    // instead of above filter I can directly write  let filter = { ...data }
    // maxPrice unnecessarily aded so throw error

    // if (data.minPrice && data.maxPrice) {
    //   Object.assign(filter, {
    //     [Op.and]: [
    //       { price: { [Op.lte]: data.maxPrice } },
    //       { price: { [Op.gte]: data.minPrice } },
    //     ],
    //   });
    // }
    let priceFilter = [];
    if (data.minPrice) {
      // Object.assign(filter, { price: { [Op.gte]: data.minPrice } });
      priceFilter.push({ price: { [Op.gte]: data.minPrice } });
    }
    if (data.maxPrice) {
      // Object.assign(filter, { price: { [Op.lte]: data.maxPrice } });
      priceFilter.push({ price: { [Op.lte]: data.maxPrice } });
    }
    Object.assign(filter, { [Op.and]: priceFilter });
    console.log(filter);
    return filter;
  }
  async createFlight(data) {
    try {
      const flight = await Flights.create(data);
      return flight;
    } catch (error) {
      console.log("Something went wrong in the repository layer");
      throw { error };
    }
  }
  async getFlight(flightId) {
    try {
      const flight = await Flights.create(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong int he repository layer");
      throw { error };
    }
  }
  async getAllFlights(filter) {
    try {
      const filterObject = this.#createFilter(filter);
      const flight = await Flights.findAll({
        where: filterObject,
      });
      return flight;
    } catch (error) {
      console.log("Something went wrong int he repository layer");
      throw { error };
    }
  }
}
module.exports = FlightRepository;
/**
 *  where : {
 *     arrivalAirportId: 2,
 *     departureAirportId : 4,
 *     price: {[Op,gte]: 4000}
 *
 * }
 */
