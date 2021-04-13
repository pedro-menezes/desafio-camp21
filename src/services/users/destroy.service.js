const { messages } = require("../../helpers");
const { usersRepository } = require("../../repositories");

module.exports.destroy = async (id) => {
  return usersRepository.destroy(id);
};
