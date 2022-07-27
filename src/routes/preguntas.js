const express = require('express');
const { model } = require('mongoose');
const { searchPreguntas, obtenerPreguntas, aumentarRanking, evaluacionPregunta } = require('../controllers/PreguntasController');



const PreguntaRouter = express.Router();


PreguntaRouter.get('/', obtenerPreguntas);
PreguntaRouter.get('/search/', searchPreguntas);
PreguntaRouter.post('/evaluacion', evaluacionPregunta)
PreguntaRouter.put('/ranking/:id', aumentarRanking);







module.exports= PreguntaRouter;

