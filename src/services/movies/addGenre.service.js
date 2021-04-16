const { moviesRepository } = require("../../repositories");

module.exports.addGenre = async (movie) => {
  moviesRepository.addGenre(movie);
  return movie;
};
