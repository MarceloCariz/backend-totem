const {request, response} = require("express");
const moment = require("moment");
const Click = require("../models/Click");


const guardarClick = async(req=request, res=response) => {
    try {
        const {idVista, nombreVista} = req.body;

        const clickToSave = new Click({idVista, nombreVista});

        await clickToSave.save()
        return res.status(201).json({msg: "click to save successfully"});

    } catch (error) {
        console.log(error);
    }

};


const obtenerClicks = async(req=request, res=response) => {
    try {

        const {fecha1, fecha2} = req.query;

        if (!fecha1 && !fecha2) {

            const getClicks = await Click.find();
    
            return res.status(200).json(getClicks);
            
        } else {

            const fecha1Parse = new Date(fecha1);
            const fecha2Parse = new Date(fecha2);

            const getClicks = await Click.find({fecha: {"$gte": fecha1Parse, "$lt": fecha2Parse}});
    
            return res.status(200).json(getClicks);
        }

        

    } catch (error) {
        console.log(error);
    }
};


module.exports = {
    guardarClick,
    obtenerClicks
}