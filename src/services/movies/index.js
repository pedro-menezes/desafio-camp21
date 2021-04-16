const { list } = require("./list.service");
const { create } = require("./create.service");
const { getById } = require("./getById.service");
const { addGenre } = require("./addGenre.service");

module.exports = {
  list,
  create,
  getById,
  addGenre
};
