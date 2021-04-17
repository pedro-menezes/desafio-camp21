const router = require("express").Router();
const { actorsController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/", actorsController.create);
module.exports.actors = router;
