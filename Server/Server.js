const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const conexion = require("./Conexion");
const Rutas = require("./Rutas/Rutas");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/restaurant", Rutas);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Bienvenido al Restaurant review");
});

app.listen(5000, function () {
  console.log("Server up and running on port 5000");
});
