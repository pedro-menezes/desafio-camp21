const { moviesRepository } = require("../../repositories");

module.exports.addActor = async (actor) => {
  return moviesRepository.addActor(actor);
};
