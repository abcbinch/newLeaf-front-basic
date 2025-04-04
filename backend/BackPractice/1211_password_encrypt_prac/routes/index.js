const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

router.get("/", controller.main);
router.get("/userJoin", controller.showJoin);
router.post("/doJoin", controller.addUser); //axios url과 맞춰주는 것 잊지 말자.
router.get("/userLogin", controller.showLogin);
router.post("/doLogin", controller.loginCheck);

module.exports = router;
