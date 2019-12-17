import React from 'react';
import '../about.css'

const About = () => {
    return(
        <div className='aboutSection'>
            <h1 style={{textAlign: 'left'}}>Quem somos</h1>
            <p>Na figura de seu sócio fundador, a TI na Medida está no mercado desde 1995. Partindo da ideia de que empresas de portes e segmentos distintos merecem soluções na sua medida, nossa empresa tem por foco buscar e aplicar soluções que atendam plenamente as suas necessidades e que possibilitem escalabilidade. Permitindo assim, a aplicação de recursos exatamente na medida do seu crescimento e sempre observando as melhores práticas em T.I. para o seu negócio.</p>
            <br/>
            <p>Seja para assumir plenamente o T.I. da sua empresa ou apoiar a sua equipe, colocamos à disposição o nosso time! Formado por profissionais especializados e treinados para atender a sua demanda.</p>
            <br/>
            <p>Através das parcerias com empresas que atuam em diferentes áreas voltadas à tecnologia, conseguimos entregar aos nossos clientes soluções personalizadas e acessíveis. Assim, levamos nossos serviços à empresas de porte e segmentos distintos. Tais como agências de publicidade, construtoras, escritórios de advocacia, arquitetura, hotéis, restaurantes, lojas de varejo, consultório médico, dentário, etc.</p>
        </div>
    );
}

export default About;