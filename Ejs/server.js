/* ---------------------- Modulos ----------------------*/
const express = require('express');
const path = require('path');

//Instancia de Server
const app = express();
const routerProductos = require('./routes/productos.routes');

/* ---------------------- Middlewares ---------------------- */
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Motor de Plantillas
app.set('views', './views');
app.set('view engine', 'ejs');

/* ---------------------- Rutas ----------------------*/
app.use(routerProductos);

/* ---------------------- Servidor ----------------------*/
const PORT = 8080;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
})

server.on('error', error=>{
    console.error(`Error en el servidor ${error}`);
});
