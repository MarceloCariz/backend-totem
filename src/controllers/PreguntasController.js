const { response, request } = require('express');
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


module.exports = {
    obtenerPreguntas,
    searchPreguntas
}