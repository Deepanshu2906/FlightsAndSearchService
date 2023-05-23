// wee need to have the access to models
const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    // destruturing obj
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }
  async deleteCity({ cityId }) {
    try {
      await City.destroy({
        where: {
          id: cityId,
        },
      });
    } catch (error) {
      throw { error };
    }
  }
}

module.exports = CityRepository;