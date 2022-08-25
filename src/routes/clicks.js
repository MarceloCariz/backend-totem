const {Router} = require('express');
const {
    guardarClick,
    obtenerClicks
} = require("../controllers/ClicksController");

const routerClick = Router();

routerClick.post("/", guardarClick);
routerClick.get("/", obtenerClicks);


module.exports = routerClick;