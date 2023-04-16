const express = require("express");
const CartController = require("../controllers/cart");
const AuthMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get(
  "/",
  AuthMiddleware.authMiddleware(["client"]),
  CartController.retrieve
);
router.put(
  "/",
  AuthMiddleware.authMiddleware(["client"]),
  CartController.update
);
router.delete(
  "/",
  AuthMiddleware.authMiddleware(["client"]),
  CartController.deleted
);

module.exports = router;
