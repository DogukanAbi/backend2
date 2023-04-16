const express = require("express");

const authRouter = require("./auth");
const productsRouter = require("./product");

function routerApi(app) {
  const router = express.Router();
  app.use("/api", router);
  router.use("/auth", authRouter);
  router.use("/products", productsRouter);
}

module.exports = routerApi;
