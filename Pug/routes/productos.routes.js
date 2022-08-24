const express = require('express');
const routerProductos = express.Router();

let DB_PRODUCTOS = [];

routerProductos.get('/productos', (req, res)=>{
    return res.render('listadoProductos', {productos: DB_PRODUCTOS});
});

routerProductos.post('/productos', (req, res)=>{
    let {title, price, thumbnail} = req.body;
    if(!title || !price || !thumbnail){
        return res.redirect('/');
    }

    let newId = DB_PRODUCTOS.length === 0 ? 1 : DB_PRODUCTOS[DB_PRODUCTOS.length - 1].id + 1;
    const nuevoProducto = {
        id: newId,
        title: req.body.title,
        price: req.body.price,
        thumbnail: req.body.thumbnail
    };

    DB_PRODUCTOS.push(nuevoProducto);
    return res.redirect('/');
});

module.exports = routerProductos;
