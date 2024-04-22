// const express = require('express');
// const bodyParser = require ('body-parser');
import express from 'express'
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
const puerto = 3000;

//Variable global que almacena los objetos
let datos = [
{ id:1, nombre: 'Ejemplo 1'},
{ id:2, nombre: 'Ejemplo 2'},
{ id:3, nombre: 'Ejemplo 3'},
];
//Ruta para tener todos los datos
app.get('/datos', (req, res) => {
res.json(datos);
});

//Ruta para crear un nuevo dato
app.post ('/datos', (req, res) => {
    const nuevoDato = req.body;
    nuevoDato.id = datos.length + 1;
    datos.push(nuevoDato);
    res.json(nuevoDato);
    });

//Ruta para eliminar un dato por su ID
app.delete('/datos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    datos = datos.filter((item) => item.id !== id);
    res.json ({ mensaje: 'Dato eliminado exitosamente' });
    });

    
app.listen (puerto, () => {
console.log(`Servidor Express escuchando en el puerto ${puerto}`);
});