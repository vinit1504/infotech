const router = require("express").Router();
const UserController  = require("./../controller/UserController")

router.post("/user",UserController.createUser)

module.exports = router