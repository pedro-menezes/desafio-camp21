const { actorsRepository } = require("../../repositories");

module.exports.getById = async (id) => {
  return actorsRepository.getById(id);
};
