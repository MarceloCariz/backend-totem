const { Schema, model } = require('mongoose');

const Docente = new Schema({
    Rut_Alumno:{
        type: String
    },
    Codigo_Seccion:{
        type: String
    },
    Nombre_Asignatura:{
        type: String
    },
    Nombre_Alumno:{
        type: String
    },
    Apellido_Paterno_Alumno:{
        type: String
    },
    Apellido_Materno_Alumno: {
        type: String
    },
    Correo_Alumno:{
        type: String
    },
    Telefono: {
        type: String
    },
    Codigo_carrera: {
        type: String
    },
    Carrera: {
        type: String
    },
    Jornada: {
        type: String
    },
    Id_Docente: {
        type: String
    },
    Nombre_Docente: {
        type: String
    },
    Apellido_Paterno_Docente: {
        type: String
    },
    Apellido_Materno_Docente: {
        type: String
    },
    Correo_Docente: {
        type: String
    },
    Nombre_Coordinador: {
        type: String
    },
    Apellido_Paterno_Coordinador: {
        type: String
    },
    Apellido_Materno_Coordinador: {
        type: String
    },
    Correo_Coordinador: {
        type: String
    }
})

module.exports = model( 'docentes', Alumno );