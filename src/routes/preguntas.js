const express = require('express');
const { model } = require('mongoose');
const { searchPreguntas, obtenerPreguntas } = require('../controllers/PreguntasController');



const PreguntaRouter = express.Router();


PreguntaRouter.get('/', obtenerPreguntas);

PreguntaRouter.get('/search/', searchPreguntas);



module.exports= PreguntaRouter;

