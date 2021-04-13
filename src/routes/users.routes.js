const router = require("express").Router();
const { usersController } = require("../controllers");
const { isAuthorized } = require("../middlewares");

router.use(isAuthorized);

router.get("/", usersController.list);
router.post("/", usersController.create);
router.delete("/", usersController.destroy);
router.put("/", usersController.update);
module.exports.users = router;
