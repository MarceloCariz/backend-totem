const {request, response} = require('express');
const Alumno = require('../models/Alumno');
const Docente = require('../models/Docente');

const findYourTeacher = async(req=request, resp=response) => {
    let date = new Date(Date.now());
    // let date = new Date('2022-08-28'); simular fecha
    date = date.toLocaleDateString('es-MX',{weekday: 'long'});
    date = (date.replace(/^\w/, (c) => c.toUpperCase()));
    try {
        const {rut} = req.params;
        const alumno = await Alumno.find({'Rut_Alumno': rut}).select('Codigo_Seccion Nombre_Alumno Apellido_Paterno_Alumno Apellido_Materno_Alumno');

        const resultado = await Promise.all(alumno.map(async(alumno)=>(
            await Docente.find({Seccion: alumno.Codigo_Seccion}).where(`${date}`).equals('X').select(`Aula Nom_Asignatura nombre_docente HorInic Final Lunes Martes Miércoles Jueves Viernes Sábado  `)
        )))
        // 199956736-Lunes  192417082-Sabado  151640419-Lunes 19649815K-Martes,Jueves

    //     const sala = resultado[0].map(({Aula})=>(Aula))
    //     // const sala =resultado.some(({Aula})=>console.log(Aula));
    //     const aula = sala[2].replace('AV-','');    
    //    const link = `${process.env.HOST}/salas/${aula}.png`;
    //    console.log(link)
       resp.json({alumno:alumno, docente: resultado[0]})

    } catch (error) {
        console.error(error);
    }

};

const findTeacherByName = async(req=request, res=response) => {
    try {
        const {nombredocente = ''} = req.query;

        if (nombredocente != null){
            let date = new Date(Date.now());
            // simular fecha
            // let date = new Date('2022-08-24'); 
            const regex = new RegExp(nombredocente, 'i');
            // const preguntas = await Pregunta.find({'pregunta': {$regex: regex}});
            date = date.toLocaleDateString('es-MX',{weekday: 'long'});
            date = (date.replace(/^\w/, (c) => c.toUpperCase()));
            // console.log(date)
            // select(`Aula Nom_Asignatura nombre_docente HorInic Final Lunes Martes Miercoles Jueves Viernes  `)
            const resultado = await Docente.find({nombre_docente: {$regex: regex}}).where(`${date}`).equals('X').select(`Aula Nom_Asignatura nombre_docente HorInic Final Lunes Martes Miércoles Jueves Viernes Sábado  `)

        
        let nuevoDocentes = [];

        resultado.map( (docente, index) => {
            
            if (docente.Aula?.length > 1 && docente.Aula?.substring(0, 3) == "AV-"){
                console.log(`${docente.nombre_docente} - ${docente.Aula}`);

                nuevoDocentes.push(docente);

            }

        });

    
        return res.status(200).json({
                docente: nuevoDocentes,
                date
        });
        }

    } catch (error) {
        console.error(error);
    }

};

const uploadDocente = (req=request, res=response) => {     
    try {

        const docente = req.body;

        docente.map(async (doc) => {
            const newDocente = new Docente({
                Nombre_Asignatura: doc.Nombre_Asignatura,
                nombre_docente: doc.nombre_docente,
                Aula: doc.Aula,
                HorInic: doc.HorInic,
                Final: doc.Final,
                Lunes: doc?.Lunes,
                Martes: doc?.Martes,
                Miércoles: doc?.Miércoles,
                Jueves: doc?.Jueves,
                Viernes: doc?.Viernes,
                Sábado: doc?.Sábado,
            });

            await newDocente.save();
        })

        return res.status(200).json({msg: "Docentes guardados!"});

    } catch (error) {
        console.error(error);
    }

}   

const uploadAlumno = (req=request, res=response) => {     
    try {

        const alumno = req.body;

        console.log(alumno);

        alumno.map(async (alu) => {
            const newAlumno = new Alumno({
                Rut_Alumno: alu.Rut_Alumno,
                Codigo_Seccion: alu.Codigo_Seccion,
                Nombre_Asignatura: alu.Nombre_Asignatura,
                Nombre_Alumno: alu.Nombre_Alumno,
                Apellido_Paterno_Alumno: alu.Apellido_Paterno_Alumno,
                Apellido_Materno_Alumno: alu.Apellido_Materno_Alumno
            });

            await newAlumno.save();
        })

        return res.status(200).json({msg: "Alumnos guardados!"});

    } catch (error) {
        console.error(error);
    }

}   

module.exports = {
    findYourTeacher,
    findTeacherByName,
    uploadDocente,
    uploadAlumno

};