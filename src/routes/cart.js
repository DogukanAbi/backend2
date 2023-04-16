const express = require("express");
const CartController = require("../controllers/cart");
const AuthMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get(
  "/",
  AuthMiddleware.authMiddleware(["client"]),
  CartController.retrieve
);

module.exports = router;
