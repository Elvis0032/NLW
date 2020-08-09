import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import  './styles.css';

    function TeacherItem(){
        return(
            <article className="teacher-item">
                <header>
                    <img src="https://avatars2.githubusercontent.com/u/52458608?s=400&u=a5c78d68a055bcdefafb16632697c65df8130649&v=4" alt="Antônio Elvis"/>
                    <div>
                        <strong>Antônio Elvis P.</strong>
                        <span>Química</span>
                    </div>
                </header>
            
                <p>
                    Entusiasta das melhores tecnologias de química avançada.
                    <br/> <br/> Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de     experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.

                </p>
                <footer>
                    <p>
                        Preço/hora
                        <strong>R$ 50,00</strong>
                    </p>
                    <button type="button">
                        <img src={whatsappIcon} alt="Whatsapp"/>
                        Entrar em contato.
                    </button>
                </footer>
            </article>
        )
    }

export default TeacherItem;