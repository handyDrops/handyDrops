const express = require("express");
const router = express.Router();
require("dotenv").config();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: true }));
const Place = require("../models/place");

router.get("/", (req, res, next) => {
  Place.find()
    .then(places => {
      places.cl4v3 = process.env.API;
      res.render("places/index", { places });
    })
    .catch(err => {
      next(err);
    });
});

router.post("/add-place", (req, res, next) => {
  let { name, adress, lng, lat } = req.body;
  if(name === '' || lng === '' || lat === '')res.render('places', {message:'insert place'})
  let newPlace = new Place({ name, adress, location: {lng, lat} });
  newPlace
    .save()
    .then(() => {
      res.redirect("/places");
    })
    .catch(err => {
      console.log(err)
      next(err);
    });
});

router.post('/delete-place/:id', (req, res, next) => {
    Place.findByIdAndRemove(req.params.id)
        .then(() => {
            res.redirect('/places');
        })
        .catch((err) => {
            next(err);
        })
})

router.get("/edit/:id", (req, res, next) => {
  Place.findById(req.params.id)
    .then(place => {
      res.render("places/edit", place);
    })
    .catch(err => {
      next(err);
    });
});
router.post("/edit-place/:id", (req, res, next) => {
  let { name, adress, long, lat } = req.body;
  Place.findByIdAndUpdate(req.params.id, { name, adress, long, lat })
    .then(() => {
      res.redirect("/places");
    })
    .catch(err => {
      next(err);
    });
});
router.get("/getPlaces", (req, res) => {
  Place.find()
    .then(places => {
      res.json({ places });
    })
    .catch(err => err);
});

module.exports = router;
