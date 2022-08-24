/* ---------------------- Modulos ----------------------*/
const express = require('express');

//Instancia de Server
const app = express();
const routerProductos = require('./routes/productos.routes');

/* ---------------------- Middlewares ---------------------- */
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

//Motores de plantilla
app.set('views', './views');
app.set('view engine', 'pug');

/* ---------------------- Rutas ----------------------*/
app.use(routerProductos);

/* ---------------------- Servidor ----------------------*/
const PORT = 8081;
const server = app.listen(PORT, ()=>{
    console.log(`Servidor escuchando en puerto ${PORT}`);
})

server.on('error', error=>{
    console.error(`Error en el servidor ${error}`);
});
