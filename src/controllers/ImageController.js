const {request, response} = require('express');
const Image = require('../models/Image');
// const multer = require('multer');





const subirImagen = async(req, resp) =>{

    const image = new  Image();
    try {
        image.title = req.body.title;
        image.active = req.body.active
        image.filename = req.file.filename;
        image.path = `${process.env.HOST}/img/uploads/` + req.file.filename;
        await image.save()
        resp.json(req.body)
    } catch (error) {
        resp.json(error)
    }
  
}

const eliminarImagen = async(req, resp)=>{

    try {
        const {id} = req.params;
        await Image.deleteOne({_id: id});

        return resp.status(200).json({msg: "Image deleted successfully"});

    } catch (error) {
        return resp.status(500).json({msg: `Error deleting image. Error => ${error}`});
    }

}

const actualizarImagen = async(req, resp) => {

    try {
        const {id} = req.params;
        const image = await Image.findById(id);
   

        if(req.file){
            image.path = `${process.env.HOST}/img/uploads/` + req.file.filename;
            image.filename =  req.file.filename;
            await image.save()
        }
        const nuevaImagen = {
            ...req.body,
        }

        const imagenActualizada = await Image.findByIdAndUpdate(id, nuevaImagen,{new: true});
        resp.json({
            ok: true,
            imagen: imagenActualizada
        });

    } catch (error) {
        return resp.status(500).json({msg: `Error update image. Error => ${error}`});
    }



}

const obtenerImagenes = async(req, resp)=>{
    try {
        const image = await Image.find();
        resp.json(image)
    } catch (error) {
        console.log(error)
    }

}
module.exports = {
    subirImagen,
    obtenerImagenes,
    eliminarImagen,
    actualizarImagen
}