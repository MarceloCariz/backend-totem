const {request, response} = require("express");
const moment = require("moment");
const Click = require("../models/Click");
const setTZ = require( 'set-tz');
setTZ('America/Santiago');


const guardarClick = async(req=request, res=response) => {
    try {
        const {idVista, nombreVista} = req.body;    

        const fechastring = new Date();

        let month = '01';

        switch (fechastring.getMonth()) {
            case 0:
                month = '01';
                break;
            case 1:
                month = '02';
                break;
            case 2:
                month = '03';
                break;
            case 3:
                month = '04';
                break;
            case 4:
                month = '05';
                break;
            case 5:
                month = '06';
                break;
            case 6:
                month = '07';
                break;
            case 7:
                month = '08';
                break;
            case 8:
                month = '09';
                break;
            case 9:
                month = '10';
                break;
            case 10:
                month = '11';
                break;
            case 10:
                month = '12';
                break;
        
            default:
                break;
        }

        const fecha = `${fechastring.getFullYear()}-${month}-${fechastring.getDate()} ${fechastring.getHours()}:${fechastring.getMinutes()}:${fechastring.getSeconds()}`;

        const clickToSave = new Click({idVista, nombreVista, fecha});

        await clickToSave.save()
        return res.status(201).json({msg: "click to save successfully", clickToSave});

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