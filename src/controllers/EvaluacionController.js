const { request } = require("express")
const Evaluacion = require("../models/Evaluacion")
const { response } = require("../routes/user")





const obtenerEvaluacion = async(req=request, resp=response) =>{

    try {
        const evaluacion = await Evaluacion.find();
        resp.json(evaluacion);
        
    } catch (error) {
        console.log(error)
    }
}





module.exports = {
    obtenerEvaluacion
}