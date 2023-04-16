const express = require("express");
const ProductController = require("../controllers/product");
const AuthMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post(
  "/",
  AuthMiddleware.authMiddleware(["admin"]),
  ProductController.create
);
router.get("/:id", ProductController.retrieve);
router.put(
  "/:id",
  AuthMiddleware.authMiddleware(["admin"]),
  ProductController.update
);
router.delete(
  "/:id",
  AuthMiddleware.authMiddleware(["admin"]),
  ProductController.deleted
);
router.get("/", ProductController.list);

module.exports = router;
