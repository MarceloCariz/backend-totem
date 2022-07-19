const mongoose  = require('mongoose')



const imageSchema = new mongoose.Schema({
    title: {type: String},
    filename: {type: String},
    path: {type: String},
    active: {type: Boolean},
    created_at: {type: Date, default: Date.now()}
})



const Image =  mongoose.model('images', imageSchema);

module.exports = Image;