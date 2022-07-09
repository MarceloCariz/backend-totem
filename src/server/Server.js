const express =  require('express');
const cors = require('cors');

class Server {

    constructor(){

        this.app = express();
        this.port = process.env.PORT || 3001;
        this.userPath = '/api/users';

        //configuraciones iniciales
        this.middlewares();
        this.routes();


    }

    
    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }


    routes(){
        this.app.use(this.userPath, require('../routes/user'));
    }

    listen(){
        
        this.app.listen(this.port);

    }
}

module.exports = Server;