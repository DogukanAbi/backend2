const express = require("express");

const authRouter = require("./auth");
const usersRouter = require("./user");
const productsRouter = require("./product");
const cartRouter = require("./cart");

function routerApi(app) {
  const router = express.Router();
  app.use("/api", router);
  router.use("/auth", authRouter);
  router.use("/users", usersRouter);
  router.use("/products", productsRouter);
  router.use("/cart", cartRouter);
}

module.exports = routerApi;
