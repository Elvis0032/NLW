import React from 'react';
import logoImg from '../../assets/images/logo.svg';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo container">
                    <img src={logoImg} alt="Proff"/>
                </div>
            </div>
            <h1>teste git</h1>
        </div>


    )
}

export default Landing;