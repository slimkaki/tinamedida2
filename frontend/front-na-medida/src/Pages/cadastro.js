import React, {useState} from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input';
import { formatPhoneNumberIntl } from 'react-phone-number-input'
import MaskedInput from 'react-text-mask';

import '../cadastro.css';

// const [value, setValue] = useState()

const Cadastro = () => {
    // const state = {phone: ""}
    return(
            <div className='CadastroSection'>
                <label>Nome Completo</label>
                <input type='text' placeholder='Nome Completo' autoCapitalize='on'></input>
                <label>E-mail</label>
                <input type='email' placeholder='E-mail'></input>
                <label>CPF</label> {/* 424.109.268-35 */}
                <MaskedInput placeholder='Insira seu CPF' guide={true} mask={[/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'.',/\d/,/\d/,/\d/,'-',/\d/,/\d/]}/>
                {/* <input type='text' placeholder='CPF'></input> */}
                <label>Número de telefone</label>
                {formatPhoneNumberIntl('+5511950750244') === '+55 (11) 95075-0244'}
                {/* <PhoneInput 
                placeholder='Telefone'
                country='br'/> */}
                <input type='tel' placeholder='Telefone'></input>
                <label>Senha</label>
                <input type='password' placeholder='Senha'></input>
                <label>Confirmação de Senha</label>
                <input type='password' placeholder='Confirmação de Senha'></input>
                <input type='submit' value='Enviar'></input>
            </div>
    )
}

export default Cadastro;