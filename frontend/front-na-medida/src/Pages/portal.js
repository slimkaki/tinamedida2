import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import '../portal.css';

const Portal = () => {
    return(
        <div className='PortalSection'>
            <h1 style={{color: 'black'}}>Seja bem-vindo ao Portal TI na Medida</h1>
            <p style={{color: 'black'}}>Insira seu usuário e senha ou cadastre-se para entrar.</p>
            <form className='loginForm'>
                <label>E-mail<span class="required">*</span>: </label>
                <input required id='user' type='text' classname='email' placeholder='Digite aqui seu e-mail'></input><br/>
                <label>Senha<span class="required">*</span>: </label>
                <input required id='assunto' type='password' classname='textinho' placeholder='Digite aqui sua senha'></input><br/>
                <input type='submit' value='Entrar'></input>
            </form>
            <p style={{color: 'black', fontSize: '15px'}}>Esqueceu sua senha? <Link to='/'>Clique aqui!</Link></p>
            <br/>
            <p style={{color: 'black', fontSize: '15px'}}>Ainda não possui um usuário? <Link to='/cadastro'>Clique aqui para se cadastrar!</Link></p>
        </div>
    )
}

export default Portal;