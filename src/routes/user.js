const express = require("express");
const UserController = require("../controllers/user");
const AuthMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.get("/", AuthMiddleware.authMiddleware(["admin"]), UserController.list);
router.get(
  "/profile",
  AuthMiddleware.authMiddleware(["client"]),
  UserController.getProfile
);
router.put(
  "/profile",
  AuthMiddleware.authMiddleware(["client"]),
  UserController.updateProfile
);

module.exports = router;
