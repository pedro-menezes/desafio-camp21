const router = require("express").Router();
const { votesController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.post("/", votesController.create);
router.get("/", votesController.list);
module.exports.votes = router;
