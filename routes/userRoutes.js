const express = require("express");
const router = express.Router();
const { signUp } = require("../routeController/userControler");

router.post("/signup", signUp);

module.exports = router;
