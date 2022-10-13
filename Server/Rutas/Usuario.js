const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  contraseña: String,
  idusuario: String,
});

const User = mongoose.model("User", userSchema);
module.exports = router;
