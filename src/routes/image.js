const {Router} = require('express');
const { subirImagen, obtenerImagenes, eliminarImagen } = require('../controllers/ImageController');
const express = require('express')



const ImagenRouter = express.Router();


ImagenRouter.post('/upload', subirImagen)

ImagenRouter.delete('/image/:id/delete', eliminarImagen)
ImagenRouter.get('/', obtenerImagenes)


module.exports = ImagenRouter;