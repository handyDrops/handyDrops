const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");

const transporter = require('../mail/transporter');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


// const ensureLogin    = require('connect-ensure-login');

// router.get("/formulario", ensureLogin.ensureLoggedIn(), (req, res) => {
//   res.render("auth/formulario", { user: req.user });
// });



router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  console.log(req.body)
  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password:hashPass
    });

    console.log(newUser)


    newUser.save()
    .then(() => {

      res.redirect("/");
    })
    .catch(err => {
      res.render("places/formulario", { message: "Something went wrong" });
    })
  });
});

// -----------private-page------

// router.post("/login", passport.authenticate('local', {
//   successRedirect: "auth/formulario",
//   failureRedirect: "/login",
//   failureFlash: true,
//   passReqToCallback: true,
// }));

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
