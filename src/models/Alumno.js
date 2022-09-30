const { Schema, model } = require('mongoose');

const Alumno = new Schema({
    // Carrera: {type: String},
    // Id_Docente: {type: String},
    // Correo_Alumno: {type: String},
    // Correo_Docente: {type: String}
    // Nombre_Docente: {type: String},
    // Apellido_Paterno_Docente: {type: String},
    // Apellido_Materno_Docente: {type: String},
    Rut_Alumno: {type: String},
    Codigo_Seccion: {type: String},
    Nombre_Asignatura: {type: String},
    Nombre_Alumno: {type: String},
    Apellido_Paterno_Alumno: {type: String},
    Apellido_Materno_Alumno: {type: String},
})

module.exports = model( 'alumnos', Alumno );