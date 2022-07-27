const { response, request } = require('express');
const Evaluacion = require('../models/Evaluacion');
const Pregunta = require('../models/Pregunta');



const obtenerPreguntas = async(req = request, resp=response) =>{
    try {
        const preguntas = await Pregunta.find();
        resp.json(preguntas);
    } catch (error) {
        console.log(error)
    }

}

const searchPreguntas = async(req = request, resp=response) =>{
    const search = req.query.q;
    try {
        const regex = new RegExp(search, 'i');
        const preguntas = await Pregunta.find({'pregunta': {$regex: regex}});
        resp.status(200).json({
            ok: true,
            preguntas
        })
        
    } catch (error) {
        
    }

}

const aumentarRanking = async(req=request, resp=response) =>{
    const {id} = req.params;
    try {
        const pregunta = await Pregunta.findById(id);
        pregunta.ranking = pregunta.ranking + 1;
        await pregunta.save();
        resp.json(pregunta)
        
    } catch (error) {
        console.log(error)
    }
}
 
const evaluacionPregunta = async(req=request, resp=response) =>{
    const evaluacionPregunta = new  Evaluacion();
    const {pregunta, categoria, evaluacion, correo} = req.body;
    try {
        evaluacionPregunta.problema = pregunta;
        evaluacionPregunta.categoria = categoria;
        evaluacionPregunta.evaluacion = evaluacion;
        evaluacionPregunta.correo = correo;
        await evaluacionPregunta.save()
        resp.json(evaluacionPregunta);
    } catch (error) {
        console.log(first)
    }
}


module.exports = {
    obtenerPreguntas,
    searchPreguntas,
    aumentarRanking,
    evaluacionPregunta
}