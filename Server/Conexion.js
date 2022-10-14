const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/RestauranTReviews");

const objetobd = mongoose.connection;

objetobd.on("connected", () => {
  console.log("Conexion correcta a MongoDB");
});
objetobd.on("error", () => {
  console.log("Error en la conexion");
});

module.exports = mongoose;
