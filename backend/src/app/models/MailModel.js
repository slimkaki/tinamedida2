const Mongoose = require('mongoose');

const MailModel = Mongoose.model("contact", {
    nome: String,
    email: String,
    assunto: String,
    texto: String
})

module.exports = MailModel;