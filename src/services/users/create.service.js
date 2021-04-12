const { usersRepository } = require("../../repositories");

module.exports.create = async (user) => {
  usersRepository.create(user);
  return user;
};
