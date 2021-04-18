const { votesRepository } = require("../../repositories");

module.exports.list = async (options) => {
  const query = {};

  if (options.movieId && options.movieId !== "") {
    query.where = { movieId: options.movieId };
  }

  if (!query.where) {
    query.where = 1;
  }

  const { rows } = await votesRepository.list(query);
  return {
    votes: rows,
  };
};
