const {Router} = require('express');
const {
    findYourTeacher, findTeacherByName
} = require('../controllers/EncuentraDocenteController');

const alumnoRouter = Router();

alumnoRouter.get('/teacher', findTeacherByName);
alumnoRouter.get('/:rut', findYourTeacher);

module.exports = alumnoRouter;