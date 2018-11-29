const express = require("express");
const emailRoute = express.Router();

const transporter = require("../mail/transporter");

emailRoute.get("/", (req, res) => {
  res.render("auth/formulario");
});

emailRoute.post("/", (req, res) => {
  console.log(req.body)
  transporter
    .sendMail({
      from: "<nfake6162@gmail.com>",
      to: req.body.email,
      subject: "Consulta tarifas",
      text: req.body.msg
    })
    .then(info => res.redirect("/"))
    .catch(error => {
      console.log(error);
      res.redirect('/');
    });
});

module.exports = emailRoute;
