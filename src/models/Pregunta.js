const mongoose = require('mongoose');


const PreguntaSchema = new mongoose.Schema({
    pregunta: {type: String},
    respuesta: {type: String},
    categoria: {type: String},
    subcategoria: {type: String},
    ranking: {type: Number}
})


const Pregunta = mongoose.model('preguntas', PreguntaSchema);


module.exports= Pregunta;