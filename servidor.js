const express=require("express");
const app = express();
const rutas = require('./rutas');

app.use('/', rutas);

app.listen (3000,()=>{
    console.log("Servidor en http://localhost:3000");
    
});