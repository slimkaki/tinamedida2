const express = require("express")
const routes = express.Router()
var cors = require('cors')
routes.use(cors())

const ContactController = require('./app/controllers/ContactController.js');

routes.post('/enviarEmail', ContactController.sendMail);
routes.post('/postContact', ContactController.postContact);

module.exports = routes;