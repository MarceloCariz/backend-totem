const {Router} = require('express');
const {
    findYourTeacher, findTeacherByName, uploadDocente
} = require('../controllers/EncuentraDocenteController');

const alumnoRouter = Router();

alumnoRouter.get('/teacher', findTeacherByName);
alumnoRouter.get('/:rut', findYourTeacher);
alumnoRouter.post('/upload-docente', uploadDocente);

module.exports = alumnoRouter;