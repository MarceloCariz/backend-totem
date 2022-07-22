const mongoose = require('mongoose');


const PreguntaSchema = new mongoose.Schema({
    pregunta: {type: String},
    respuesta: {type: String},
    categoria: {type: String}
})


const Pregunta = mongoose.model('preguntas', PreguntaSchema);


module.exports= Pregunta;