const {Router} = require('express');
const { subirImagen, obtenerImagenes, eliminarImagen, actualizarImagen } = require('../controllers/ImageController');
const express = require('express')



const imagenRouter = express.Router();


imagenRouter.post('/upload', subirImagen)
imagenRouter.delete('/image/:id/delete', eliminarImagen)
imagenRouter.put('/image/:id/update', actualizarImagen)
imagenRouter.get('/', obtenerImagenes)


module.exports = imagenRouter;