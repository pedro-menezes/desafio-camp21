const { moviesRepository } = require("../../repositories");

module.exports.create = async (params) => {
  return moviesRepository.create(params);
};
