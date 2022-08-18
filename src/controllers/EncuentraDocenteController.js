const {request, response} = require('express');
const Alumno = require('../models/Alumno');
const Docente = require('../models/Docente');

const findYourTeacher = async(req=request, resp=response) => {

    try {
        const {rut} = req.params;
        const alumno = await Alumno.find({'Rut_Alumno': rut}).select('Codigo_Seccion');

        const resultado = await Promise.all(alumno.map(async(alumno)=>(
            await Docente.find({Seccion: alumno.Codigo_Seccion}).select('Aula Nom_Asignatura nombre_docente HorInic Final Lunes Martes Miercoles Jueves Viernes ')
        )))
        // 199956736

    //     const sala = resultado[0].map(({Aula})=>(Aula))
    //     // const sala =resultado.some(({Aula})=>console.log(Aula));
    //     const aula = sala[2].replace('AV-','');    
    //    const link = `${process.env.HOST}/salas/${aula}.png`;
    //    console.log(link)
       resp.json(resultado[0])

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