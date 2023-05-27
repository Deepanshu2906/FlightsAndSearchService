// wee need to have the access to models
const { City } = require("../models/index");
const { Op } = require("sequelize");

class CityRepository {
  async createCity({ name }) {
    //{ name:"New delhi"}
    try {
      const city = await City.create({
        name, // name : name
      });
      return city;
    } catch (error) {
      console.log("Something went wrong in the repositiry layer");
      throw { error };
    }
  }
  async deleteCity(cityId) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
      return true;
    } catch (error) {
      console.log("Something went wrong in the repositiry layer");
      throw { error };
    }
  }
  async updateCity(cityId, data) {
    try {
      // The below approach also works but will return updated object
      // if we r using pg sql then returning: true can  be used else not
      // const city = await City.update(data, {
      //   where: {
      //     id: cityId,
      //   },
      // });
      // for getting the updated data in mysql use below
      const city = await City.findByPk(cityId);
      city.name = data.name;
      await city.save();
      return city;
    } catch (error) {
      console.log("Something went wrong in the repositiry layer");
      throw { error };
    }
  }

  async getCity(cityId) {
    try {
      const city = await City.findByPk(cityId);
      return city;
    } catch (error) {
      console.log("Something went wrong in the repositiry layer");
      throw { error };
    }
  }
  async getAllCities(filter) {
    // here filter is query params obj
    try {
      if (filter.name) {
        const cities = await City.findAll({
          where: {
            name: {
              [Op.startsWith]: filter.name,
            },
          },
        });
        return cities;
      }
      const cities = await City.findAll();
      return cities;
    } catch (error) {
      console.log("Something went wrong in the repositiry layer");
      throw { error };
    }
  }
}

module.exports = CityRepository;
