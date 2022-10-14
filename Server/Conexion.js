const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://admin:1234@cluster0.jnho3.mongodb.net/RestaruranTReviews"
);

const objetobd = mongoose.connection;

objetobd.on("connected", () => {
  console.log("Conexion correcta a MongoDB");
});
objetobd.on("error", () => {
  console.log("Error en la conexion");
});

module.exports = mongoose;
