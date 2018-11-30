const express = require("express");
const descuentosRoute = express.Router();



descuentosRoute.get("/login", (req, res) => {
  res.render("auth/descuentos");
});

module.exports = descuentosRoute