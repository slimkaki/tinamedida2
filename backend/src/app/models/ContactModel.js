const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        require: true
    },
    assunto: {
        type: String,
        require: true
    },
    texto: {
        type: String,
        require: true
    }
});

module.exports = new mongoose.model('Contacts', ContactSchema);