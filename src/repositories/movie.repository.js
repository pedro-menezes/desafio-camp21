const { Movie } = require("../models");

module.exports = {
  list: (query) => Movie.findAndCountAll(query),
  getById: (id) => Movie.findByPk(id),
  get: (params) => Movie.findOne({ where: params }),
  create: (params) => Movie.create(params),
  addGenre: (params) => params.movie.addGenre(params.genre),
  update: (movie) => movie.save(),
  destroy: (id) => Movie.destroy({ where: { id } }),
  delete: (movie) => movie.save(),
};
