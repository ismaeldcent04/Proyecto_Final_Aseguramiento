const express = require("express");
const app = express();
const conexion = require("./config");
const usuario = require("./Rutas/Usuario");

app.use("/api/usuario", usuario);

app.get("/", function (req, res) {
  res.send("Bienvenido al Restaurant review");
});

app.listen(3000, function () {
  console.log("Server up and running on port 3000");
});
