const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
/*USER COLLECTION*/
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  iduser: String,
});
const User = mongoose.model("User", userSchema);
/*REVIEW COLLECTION*/
const reviewtSchema = new mongoose.Schema({
  comentario: String,
  puntuacion: {
    type: Number,
    min: 1,
    max: 5,
  },
});
const Review = mongoose.model("Review", reviewtSchema);
/*RESTAURANT COLLECTION*/
const restaurantSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  imagen: String,
  review: [{ type: mongoose.Schema.Types.ObjectId, ref: "Review" }],
});
const Restaurant = mongoose.model("Restaurant", restaurantSchema);

router.get("/home", (req, res) => {
  res.send("homepage");
});
/*SIGN UP SECTION */
router.get("/sign-up", (req, res) => {
  res.end("Hola esta es la pagina de registro");
});

router.post("/sign-up", (req, res) => {
  console.log(req.body.email);

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  newUser.save(function (err) {
    if (!err) {
      console.log("Succesfully added new user");
    } else {
      res.end(err);
    }
  });
});
/*LOG IN SECTION */
router.get("/login", (req, res) => {
  res.end("Hola esta es la pagina de login");
});
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }, function (err, foundUser) {
    if (err) {
      console.log(err);
    } else {
      if (foundUser) {
        if (foundUser.password === password) {
          res.send("Credenciales correctas");
        } else {
          res.send("Credenciales incorrectas, por favor intenta de nuevo");
        }
      } else {
        res.send("Usuario no existente");
      }
    }
  });
});

/*RESTAURANT SE*/
router.get("/restaurant", (req, res) => {
  Restaurant.find({}, function (err, restaurantfound) {
    if (err) {
      console.log(err);
    } else {
      res.send(restaurantfound);
    }
  });
});

router.post("/restaurant", (req, res) => {
  const newrestaurant = new Restaurant({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
    imagen: req.body.imagen,
  });
  newrestaurant.save(function (err, addedrestaurant) {
    if (err) {
      console.log(err);
    } else {
      console.log("restaurante agregado correctamente");
      res.send(addedrestaurant);
    }
  });
});

/*REVIEWS SET obtener los reviews*/
router.get("/review", (req, res) => {
  Restaurant.findOne({ nombre: req.body.nombre })
    .populate("review")
    .exec((err, foundrestaurant) => {
      res.send(foundrestaurant.review);
    });
});

router.post("/review", (req, res) => {
  const newreview = new Review({
    comentario: req.body.comentario,
    puntuacion: req.body.puntuacion,
  });
  newreview.save((err) => console.log(err));

  Restaurant.findOne(
    { nombre: req.body.nombre },
    function (err, foundrestaurant) {
      if (err) {
        console.log(err);
      } else {
        foundrestaurant.review.push(newreview);
        foundrestaurant.save();
        res.send("se agrego correctamente");
      }
    }
  );
});

module.exports = router;
