const { response, request } = require('express');
const Evaluacion = require('../models/Evaluacion');
const Pregunta = require('../models/Pregunta');



const obtenerPreguntas = async(req = request, resp=response) =>{
    try {
        const preguntas = await Pregunta.find().sort({ranking: -1});
        resp.json(preguntas);
    } catch (error) {
        console.log(error)
    }

}

const actualizarPregunta = async(req=request, resp=response) =>{
    try {
        const {id} = req.params;
        const nuevaPregunta = {
            ...req.body,
        }

        const preguntaActualizada = await Pregunta.findByIdAndUpdate(id, nuevaPregunta,{new: true});
        resp.json({
            ok: true,
            pregunta: preguntaActualizada
        });
    } catch (error) {
        console.log(error)
    }
}
const guardarPregunta = async(req=request, resp=response) => {

    try {
        const {
            pregunta,
            respuesta,
            categoria,
            subcategoria,
            ranking
        } = req.body;
    
        const nuevaPregunta = new Pregunta({
            pregunta,
            respuesta,
            categoria,
            subcategoria,
            ranking
        });

        await nuevaPregunta.save();

        return resp.status(201).json({msg: "Pregunta guardar con exito!"});
        
    } catch (error) {
        return resp.status(500).json({msg: "Error al guardar pregunta!"});
    }
    
};

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
    const {problema, categoria, evaluacion, correo} = req.body;
    try {
        evaluacionPregunta.problema = problema;
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
    evaluacionPregunta,
    guardarPregunta,
    actualizarPregunta
}