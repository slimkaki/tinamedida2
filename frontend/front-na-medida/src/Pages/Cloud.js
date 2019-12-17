import React from 'react';
import '../cloud.css'

const Cloud = () => {
    return(
        <div className='cloudSection'>
            <h1 style={{textAlign: 'left', marginLeft: "3%"}}>Cloud/Nuvem</h1>
            <div class="cloudOptions">
                <ul>
                    <h2>Introdução</h2>
                    <p>Identificar os primeiros passos para colocar sua empresa na nuvem, é essencial para um resultado positivo e de baixo custo.</p>
                </ul>
                <ul>
                    <h2>Híbrida</h2>
                    <p>Existem diversos motivos para ter alguns recursos locais e outros em nuvem.</p>
                </ul>
            </div>
        </div>
    )
}

export default Cloud;