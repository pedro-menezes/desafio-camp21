const { Vote } = require("../models");

module.exports = {
  list: (query) => Vote.findAndCountAll(
    {logging: console.log, },query),
  getById: (id) => Vote.findByPk(id),
  get: (params) => Vote.findOne({ where: params }),
  create: (params) => Vote.create(params),
  update: (vote) => vote.save(),
  destroy: (id) => Vote.destroy({ where: { id } }),
  delete: (vote) => vote.save(),
};
