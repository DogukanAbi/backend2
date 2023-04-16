const express = require("express");
const ProductController = require("../controllers/product");

const router = express.Router();

router.post("/", ProductController.create);
router.get("/:id", ProductController.retrieve);
router.put("/:id", ProductController.update);
router.delete("/:id", ProductController.deleted);
router.get("/", ProductController.list);

module.exports = router;
