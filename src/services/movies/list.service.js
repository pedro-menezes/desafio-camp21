const { moviesRepository } = require("../../repositories");

module.exports.list = async (options) => {
  const query = {};

  if (options.title && options.title !== "") {
    query.where = { title: options.title };
  }

  if (options.genre && options.genre !== "") {
    query.where = { ...query.where, genre: options.genre };
  }

  if (options.actor && options.actor !== "") {
    query.where = { ...query.where, actor: options.actor };
  };

  if (options.director && options.director !== "") {
    query.where = { ...query.where, director: options.director };
  };
  
  console.log(options);
  const { rows } = await moviesRepository.list(query);
  return {
    movies: rows,
  };
};
