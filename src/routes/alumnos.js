const {Router} = require('express');
const {
    findYourTeacher, findTeacherByName
} = require('../controllers/EncuentraDocenteController');

const alumnoRouter = Router();

alumnoRouter.get('/', findYourTeacher);
alumnoRouter.get('/teacher', findTeacherByName);

module.exports = alumnoRouter;