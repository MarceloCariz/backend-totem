const { Schema, model } = require('mongoose');


const Docente = new Schema({
    // nombre_seccion: {type: String},
    // rut_docente: {type: String},
    Seccion: {type: String},
    Nombre_Asignatura: {type: String},
    nombre_docente: {type: String},
    Aula: {type: String},
    HorInic: {type: String, required: false},
    Final: {type: String, required: false},
    Lunes: {type: String, require: false},
    Martes: {type: String, require: false},
    Miércoles: {type: String, require: false},
    Jueves: {type: String, require: false},
    Viernes: {type: String, require: false},
    Sábado: {type: String, require: false}

    
})

module.exports = model( 'docentes', Docente );