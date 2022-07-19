const {Router} = require('express');
const { subirImagen, obtenerImagenes, eliminarImagen } = require('../controllers/ImageController');
const express = require('express')



const imagenRouter = express.Router();


imagenRouter.post('/upload', subirImagen)

imagenRouter.delete('/image/:id/delete', eliminarImagen)
imagenRouter.get('/', obtenerImagenes)


module.exports = imagenRouter;