const { moviesRepository } = require("../../repositories");

module.exports.addGenre = async (movie) => {
  return moviesRepository.addGenre(movie); 
};
