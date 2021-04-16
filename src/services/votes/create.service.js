const { votesRepository } = require("../../repositories");

module.exports.create = async (vote) => {
  votesRepository.create(vote);
  return vote;
};
