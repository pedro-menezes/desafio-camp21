const { moviesRepository } = require("../../repositories");

module.exports.getById = async (movie) => {
  return moviesRepository.getById(movie);
};
