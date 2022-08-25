const {Schema, model} = require("mongoose");

const Click = new Schema({

    idVista: {
        type: Number,
        required: true
    },
    nombreVista: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    }
});


module.exports = model("Clicks", Click);