const { genresRepository } = require("../../repositories");

module.exports.create = async (params) => {
  return genresRepository.create(params);
};
