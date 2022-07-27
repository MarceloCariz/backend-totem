const mongoose = require('mongoose');



const EvaluacionSchema = new mongoose.Schema({
    categoria: {type: String},
    evaluacion: {type: String},
    problema: {type: String},
    correo: {type: String},
})




const Evaluacion =  mongoose.model('evaluaciones',EvaluacionSchema);

module.exports = Evaluacion;