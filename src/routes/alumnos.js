const {Router} = require('express');
const {
    findYourTeacher, findTeacherByName, uploadDocente, uploadAlumno
} = require('../controllers/EncuentraDocenteController');

const alumnoRouter = Router();

alumnoRouter.get('/teacher', findTeacherByName);
alumnoRouter.get('/:rut', findYourTeacher);
alumnoRouter.post('/upload-docente', uploadDocente);
alumnoRouter.post('/upload-alumno', uploadAlumno);

module.exports = alumnoRouter;