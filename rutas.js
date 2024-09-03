const express = require('express');
const router = express.Router();
const { obtenerFechaHoraActual, enviarMensaje } = require('./funciones');

router.get('/', (req, res) => {
    const fechaHoraIngreso = obtenerFechaHoraActual();
    const mensajeHola = enviarMensaje();
    console.log(`Ingreso a la ruta inicio en: ${fechaHoraIngreso}`);
    res.send(`${mensajeHola}, ingreso a la ruta inicio en: ${fechaHoraIngreso}`);
});

router.get('/login', (req, res) => {
    const fechaHoraIngreso = obtenerFechaHoraActual();
    const mensajeHola = enviarMensaje();
    console.log(`Ingreso a la ruta login en: ${fechaHoraIngreso}`);
    res.send(`${mensajeHola}, ingreso a la ruta login en: ${fechaHoraIngreso}`);
});

module.exports = router;
