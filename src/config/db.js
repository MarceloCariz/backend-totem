
const mongoose = require('mongoose');

const dbConnection = async() => {

    try {
        
        await mongoose.connect( process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'totem'
        } );

        console.log('connect to Mongo');

    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos');
    }

}

module.exports = {
    dbConnection
}