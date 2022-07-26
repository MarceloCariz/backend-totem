const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { dbConnection } = require("../config/db");
const multer =require('multer')
const path = require('path')


class Server {
  constructor() {
    this.app = express();

    // this.app(bodyParser.json());

    // this.app.set("view engine", "ejs");
    this.port = process.env.PORT || 3001;
    this.userPath = "/api/users";
    this.preguntasPath = "/api/preguntas";
    this.examsPath = "/api/exams";
    this.imagenPath = "/api/imagenes";
    this.evaluacionPath = '/api/evaluacion';
    this.alumnosPath = '/api/alumnos';
    this.clickPath = "/api/click";

    //db
    this.connection();

    //configuraciones iniciales
    this.middlewares();
    this.routes();
  }

  async connection() {
    await dbConnection();
  }

  middlewares() {
    this.app.use(express.json({limit: '50mb'}));
    this.app.use(express.urlencoded({limit: '50mb'}));

    // this.app.use(express.json());
    this.app.use(cors());
    this.app.use(express.urlencoded({ extended: false }));
    const storage = multer.diskStorage({
      destination: path.join(__dirname, "public/img/uploads"),
      filename: (req, file, cb, filename) => {
        cb(null, file.originalname);
      },
    });
    this.app.use(multer({ storage: storage }).single("image"));

    this.app.use(express.static(path.join(__dirname, "public")));


    

  }

  routes() {
    this.app.use(this.userPath, require("../routes/user"));
    this.app.use(this.examsPath, require("../routes/exams"));
    this.app.use(this.imagenPath, require("../routes/image"));
    this.app.use(this.preguntasPath,require('../routes/preguntas'));
    this.app.use(this.evaluacionPath, require('../routes/evaluacion'));
    this.app.use(this.alumnosPath, require('../routes/alumnos'));
    this.app.use(this.clickPath, require("../routes/clicks"));
  }

  listen() {
    this.app.listen(this.port);
  }
}

module.exports = Server;
