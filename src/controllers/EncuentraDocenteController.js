const {request, response} = require('express');
const Alumno = require('../models/Alumno');
const Docente = require('../models/Docente');

const findYourTeacher = async(req=request, res=response) => {

    try {
        const {rutalumno = '', asignatura = ''
        } = req.query;

        
        if (rutalumno != null){
            alumno = await Alumno.find({ Rut_Alumno: rutalumno});

            // docente = await Docente.find({rut_docente: alumno[0].Id_Docente})

            return res.status(200).json({
                alumno
                // docente
            });
        }

        if (asignatura != null){
            alumno = await Alumno.find({ Nombre_Asignatura: asignatura});
            return res.status(200).json({
                alumno,
                docente: null
            });
        }
        

    } catch (error) {
        console.error(error);
    }

};

const findTeacherByName = async(req=request, res=response) => {

    try {
        const {nombredocente = ''} = req.query;

        
        if (nombredocente != null){
            docente = await Docente.find({nombre_docente: nombredocente});

            return res.status(200).json({
                docente
            });
        }

        

    } catch (error) {
        console.error(error);
    }

};


module.exports = {
    findYourTeacher,
    findTeacherByName
};