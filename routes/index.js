const express = require("express");
const buy = require("../models/buy");
const buytsRouter = require("./buy_routes");

function routerApi(app) {
  const router = express.Router();
  /* Parte del endpoint estático: http://localhost:3000/api/v1 */
  app.use("/api/v1", router);
  /* Endpoint: http://localhost:3000/api/v1/products */
  router.use("/buys", buytsRouter);
}

module.exports = routerApi;
