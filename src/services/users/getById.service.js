const { messages } = require("../../helpers");
const { usersRepository } = require("../../repositories");

module.exports.getById = async (id) => {
  return usersRepository.getById(id);
};
