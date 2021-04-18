const { Vote } = require("../models");
const sequelize = require("sequelize");

module.exports = {
  list: (query) => Vote.findAndCountAll({
    logging: console.log,
    where: query.where.movieId ? {movieId: query.where.movieId} : {},
    attributes: [
      'movieId',
      [sequelize.fn('AVG', sequelize.col('note')), 'media']
    ],
    group: ['movieId']
  }),
  getById: (id) => Vote.findByPk(id),
  get: (params) => Vote.findOne({ where: params }),
  create: (params) => Vote.create(params),
  update: (vote) => vote.save(),
  destroy: (id) => Vote.destroy({ where: { id } }),
  delete: (vote) => vote.save(),
};
