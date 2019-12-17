const ContactModel = require('../models/ContactModel.js');
var nodemailer = require('nodemailer');
var keys = require('../../keys.js');
var transporter = nodemailer.createTransport(keys.mailKeys);

function mailer(nome, email, subject, message) {
    var mailOptions = {
        from: email,
        to: 'testenamedida@gmail.com',
        subject: subject,
        text: `Email de ${nome}: ${email}\nAssunto: ${subject}\nMenssagem: ${message}`
    };
    return(mailOptions);
}

class ContactController {
    
    async sendMail(req, res) {
        try {
            const nome = req.body.nome;
            const email = req.body.email;
            const assunto = req.body.assunto;
            const texto = req.body.texto;

            var mailOptions = mailer(nome, email, assunto, texto);
            transporter.sendMail(mailOptions, function(error, info){
                if (error) {
                  console.log(error);
                } else {
                  console.log('Email sent: ' + info.response);
                }
              });
        } catch (e) {
            console.error(e);
        }
    }

    async postContact(req, res) {
        try{
            const nome = req.body.nome;
            const email = req.body.email;
            const assunto = req.body.assunto;
            const texto = req.body.texto;
            new ContactModel({
                nome: nome,
                email: email,
                assunto: assunto,
                texto: texto
              }).save().then(() => {
                console.log(`Contato salvo no mongoDB!!!\nNome: ${nome}`)
              }).catch((err) => {
                console.log('Erro ao tentar salvar contato ao mongoDB: ' + err); 
              });
        } catch (e) {
            console.error(e)
        }
    }
}

module.exports = new ContactController();