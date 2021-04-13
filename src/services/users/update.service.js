const { messages } = require("../../helpers");
const { usersRepository } = require("../../repositories");

module.exports.update = async (user) => {
  console.log(user);
  return usersRepository.update(user);
};
