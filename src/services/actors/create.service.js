const { actorsRepository } = require("../../repositories");

module.exports.create = async (params) => {
  return actorsRepository.create(params);
};
