const express = require("express");
const app = express();
const dataJson = require("./json/mock.json")

app.get("/mock", function (req, res) {
  res.status(404).json(dataJson);
});

app.get("/", function (req, res) {
  respuesta = {
    error: true,
    codigo: 200,
    mensaje: "Punto de inicio",
  };
  res.send(respuesta);
});

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
});
