const router = require("express").Router();
const { usersController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.get("/", usersController.list);
router.post("/", usersController.create);
module.exports.users = router;
