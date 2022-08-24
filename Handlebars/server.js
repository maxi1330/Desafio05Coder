/* ---------------------- Modulos ----------------------*/
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

//Instancia de Server
const app = express();
const routerProductos = require('./routes/productos.routes');

/* ---------------------- Middlewares ---------------------- */
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(__dirname + '/public'));

//Motor de Plantillas
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'partials'),
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

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
