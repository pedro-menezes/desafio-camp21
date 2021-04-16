const { auth } = require("./auth.routes");
const { users } = require("./users.routes");
const { movies } = require("./movies.routes");
const { votes } = require("./votes.routes");
const { genres } = require("./genres.routes");

module.exports = {
  auth,
  users,
  movies,
  votes,
  genres,
};
