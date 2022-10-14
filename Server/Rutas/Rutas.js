const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  iduser: String,
});

const User = mongoose.model("User", userSchema);
module.exports = router;

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
      console.log("Usuario agregado correctamente");
    } else {
      res.end(err);
    }
  });
});

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
          res.send("Usuario existe, entrando al home....");
        } else {
          res.send("Credenciales incorrectas, por favor intenta de nuevo");
        }
      }
    }
  });
});

router.get("/home", (req, res) => {
  res.end("Hola esta es la pagina de home");
});
