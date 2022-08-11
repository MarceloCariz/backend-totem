const { Schema, model } = require('mongoose');

const Docente = new Schema({
    nombre_seccion: {type: String},
    Nombre_Asignatura: {type: String},
    rut_docente: {type: String},
    Aula: {type: String}
})

module.exports = model( 'docentes', Docente );