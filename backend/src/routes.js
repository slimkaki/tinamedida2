const express = require("express")
const routes = express.Router()
var cors = require("cors")
routes.use(cors())
const ContactController = require('./app/controllers/ContactController');

// Exemplo
// const LoginController = require('./app/controllers/LoginController');

// routes.get('/getPreSignedUrl', AwsController.getPreSignedUrl);
// routes.get('/listObjects', AwsController.listObjects);
routes.post('/enviarEmail', ContactController.sendMail);

module.exports = routes;