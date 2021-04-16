const router = require("express").Router();
const { genresController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/", genresController.create);
module.exports.genres = router;
