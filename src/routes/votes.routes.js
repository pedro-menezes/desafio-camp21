const router = require("express").Router();
const { votesController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/", votesController.create);
module.exports.votes = router;
