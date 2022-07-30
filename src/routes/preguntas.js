const express = require('express');
const { model } = require('mongoose');
const { 
    searchPreguntas,
    obtenerPreguntas, 
    aumentarRanking, 
    evaluacionPregunta,
    guardarPregunta,
    actualizarPregunta
} = require('../controllers/PreguntasController');



const PreguntaRouter = express.Router();


PreguntaRouter.get('/', obtenerPreguntas);
PreguntaRouter.get('/search/', searchPreguntas);
PreguntaRouter.post('/evaluacion', evaluacionPregunta)
PreguntaRouter.post('/save/', guardarPregunta);
PreguntaRouter.put('/ranking/:id', aumentarRanking);
PreguntaRouter.put('/update/:id' , actualizarPregunta);







module.exports= PreguntaRouter;

