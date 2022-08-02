const {Router} = require('express');
const { obtenerEvaluacion } = require('../controllers/EvaluacionController');

const evaluacionRouter = Router();

evaluacionRouter.get('/', obtenerEvaluacion);


module.exports = evaluacionRouter



