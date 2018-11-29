const express = require("express");
const baileRoute = express.Router();



baileRoute.get("/", (req, res) => {
  res.render("auth/baile");
});

module.exports = baileRoute