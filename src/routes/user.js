const express = require("express");
const UserController = require("../controllers/user");
const AuthMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", AuthMiddleware.authMiddleware(["admin"]), UserController.list);

module.exports = router;
