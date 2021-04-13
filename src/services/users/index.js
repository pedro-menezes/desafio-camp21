const { list } = require("./list.service");
const { create } = require("./create.service");
const { getById } = require("./getById.service");
const { destroy } = require("./destroy.service");
const { update } = require("./update.service");


module.exports = {
  list,
  create,
  destroy,
  getById,
  update,
};
