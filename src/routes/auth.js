const express = require("express");
const AuthController = require("../controllers/auth");

const router = express.Router();

router.post("/signUp", AuthController.signUp);
router.post("/login", AuthController.login);

module.exports = router;