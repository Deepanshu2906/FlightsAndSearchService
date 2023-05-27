const { CrudRepository } = require("../repository/index");

class CrudService {
  constructor(repository) {
    this.repository = repository;
  }

  async create(data) {
    try {
      const resp = await this.repository.create(data);
      return resp;
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw { error };
    }
  }
  async destroy(id) {
    try {
      const response = await this.repository.destroy(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw { error };
    }
  }
  async get(id) {
    try {
      const response = await this.repository.get(id);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw { error };
    }
  }
  async getAll(filter) {
    try {
      const response = await this.repository.getAll(filter);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw { error };
    }
  }
  async update(id, data) {
    try {
      const response = await this.repository.update(id, data);
      return response;
    } catch (error) {
      console.log("Something went wrong in crud service");
      throw { error };
    }
  }
}
module.exports = CrudService;
