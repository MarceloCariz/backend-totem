const {request, response} = require('express');
const Alumno = require('../models/Alumno');
const Docente = require('../models/Docente');

const findYourTeacher = async(req=request, res=response) => {

    try {
        const {
            rutalumno = '',
            nomasignatura = ''
        } = req.query;

        alumno = await Alumno.find({ Rut_Alumno: rutalumno, Nombre_Asignatura: nomasignatura });


        res.status(200).json({
            alumno,
            docente: null
        });
        

    } catch (error) {
        
    }

};


module.exports = {
    findYourTeacher
};