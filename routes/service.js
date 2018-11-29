const express = require("express");
const serviceRoute = express.Router();



serviceRoute.get("/", (req, res) => {
  res.render("auth/servicios");
});

module.exports = serviceRoute