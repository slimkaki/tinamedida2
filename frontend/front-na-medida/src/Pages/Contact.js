import React from 'react';
import '../contact.css';
import axios from 'axios';

const Contact = () => {
    const mailContact = (nome, email, assunto, texto) => {
        axios.post('http://tinamedida.com.br:21206/routes/enviarEmail', {nome: nome, email: email, assunto: assunto, texto: texto});
        axios.post('http://tinamedida.com.br:21206/routes/postContact', {nome: nome, email: email, assunto: assunto, texto: texto});
    }

    const salvaDados = e => {
        e.preventDefault();

        const contact = 
            {
                nome: String,
                email: String,
                assunto: String,
                texto: String
            }

        var nome =  String
        var email = String
        var assunto = String
        var texto = String

        nome = document.getElementById('nome').value;
        email = document.getElementById('email').value;
        assunto = document.getElementById('assunto').value;
        texto = document.getElementById('texto').value;
        
        alert('Obrigado pelo contato! Você será contatado pela nossa equipe no email inserido!');
        mailContact(nome, email, assunto, texto)
    }

    return(
        <div className='contactSection'>
            <h1 style={{color: "black", textAlign: "left"}}>Enviar Mensagem</h1>
            <form className='contactForm' onSubmit={salvaDados}>
                <label>Nome<span class="required">*</span>: </label>
                <input required id='nome' type='text' classname='textinho' placeholder='Digite aqui seu nome'></input><br/>
                <label>E-mail<span class="required">*</span>: </label>
                <input required id='email' type='text' classname='textinho' placeholder='Digite aqui seu email de contato'></input><br/>
                <label>Assunto<span class="required">*</span>: </label>
                <input required id='assunto' type='text' classname='textinho' placeholder='Digite aqui o assunto'></input><br/>
                <label>Mensagem<span class="required">*</span>: </label><br/>
                <textarea required id='texto' type='text' classname='textao' placeholder='Digite aqui sua mensagem'></textarea><br/>
                <input type='submit' placeholder='Enviar'></input>
            </form>
        </div>
    )
}

export default Contact;