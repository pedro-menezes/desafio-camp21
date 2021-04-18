const { Movie } = require("../models");
const { Actor } = require("../models");
const { Genre } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  list: (query) => Movie.findAndCountAll({
    logging: console.log,
    where: { 
      [Op.and]: [query.where.title ?  { title: query.where.title } : {}
      , query.where.director ?  { director_name: query.where.director } : {}]
    },
    attributes: ["id","title","duration","director_name"],
    include: [
      {
        where: query.where.actor ? { name: query.where.actor } : {},
        model: Actor,
        as: "actors",
        attributes: ["id","name"],
        through: {
          attributes: [],
        }
      },
      {
        where: query.where.genre ? { name: query.where.genre } : {},
        model: Genre,
        as: "genres",
        attributes: ["id","name"],
        through: {
          attributes: [],
        }
      },
    ]
  }),
  getById: (id) => Movie.findByPk(id),
  get: (params) => Movie.findOne({ where: params }),
  create: (params) => Movie.create(params),
  addGenre: (params) => params.movie.addGenre(params.genre),
  addActor: (params) => params.movie.addActor(params.actor),
  update: (movie) => movie.save(),
  destroy: (id) => Movie.destroy({ where: { id } }),
  delete: (movie) => movie.save(),
};
