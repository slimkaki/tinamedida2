const MailModel = require('../models/MailModel.js');

class ContactController {
    async sendMail(req, res) {
        try {
            const nome = req.body.nome;
            const email = req.body.email;
            const assunto = req.body.assunto;
            const texto = req.body.texto;
            console.log(nome)
            console.log(email)
            console.log(assunto)
            console.log(texto)
        } catch (e) {
            console.error(e);
        }
    }
}

module.exports = new ContactController();