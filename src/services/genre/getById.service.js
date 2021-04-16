const { genresReposit } = require("../../repositories");

module.exports.getById = async (movie) => {
  return genresReposit.getById(movie);
};
