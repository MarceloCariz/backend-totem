const {Router} = require('express');
const { getExamenByUser } = require('../controllers/Examen');

const examsRouter = Router();

examsRouter.get('/:rut', getExamenByUser);


module.exports = examsRouter



