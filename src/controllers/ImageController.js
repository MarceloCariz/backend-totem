const {request, response} = require('express');
const Image = require('../models/image');
// const multer = require('multer');





const subirImagen = async(req, resp) =>{

    const image = new  Image();
    image.title = req.body.title;
    image.active = req.body.active
    image.filename = req.file.filename;
    image.path = `${process.env.HOST}/img/uploads/` + req.file.filename;
    await image.save()
    resp.json(req.body)
}

const eliminarImagen = async(req, resp)=>{
    const image = await Image.find();
    resp.status(200).json(image)
}

const obtenerImagenes = async(req, resp)=>{
    const image = await Image.find();
    resp.json(image)
}
module.exports = {
    subirImagen,
    obtenerImagenes,
    eliminarImagen
}