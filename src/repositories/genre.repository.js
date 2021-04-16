const { Genre } = require("../models");

module.exports = {
  list: (query) => Genre.findAndCountAll(query),
  getById: (id) => Genre.findByPk(id),
  get: (params) => Genre.findOne({ where: params }),
  create: (params) => Genre.create(params),
  update: (genre) => genre.save(),
  destroy: (id) => Genre.destroy({ where: { id } }),
  delete: (genre) => genre.save(),
};
