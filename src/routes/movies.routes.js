const router = require("express").Router();
const { moviesController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.get("/", moviesController.list);
router.post("/", moviesController.create);
module.exports.movies = router;
