import React, { useState } from 'react';

// Header
import Header from '../../components/Header/index';

// Footer
import Footer from '../../components/Footer/index';

import { Link } from 'react-router-dom';

import './style.css';
import '../Home/style.css';

export default function App() {
    return (
        <div className="container">
            <Header />
            <section className="muralSec">
                <h2>Mural</h2>
                <div className="mural">
                    <div className="muralCont">
                        <div className="postit"><p>Chorão</p></div>
                        <div className="phrase">"Ser forte é ter coragem pra continuar. Ter força é ter força pra se superar."</div>
                    </div>
                    <div className="muralCont">
                        <div className="postit"><p>Mahatma Gandhi</p></div>
                        <div className="phrase">"Nas grandes batalhas da vida, o primeiro passo para a vitória é o desejo de vencer."</div>
                    </div>
                    <div className="muralCont">
                        <div className="postit"><p>Martin Luther King</p></div>
                        <div className="phrase">"Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada. Apenas dê o primeiro passo."</div>
                    </div>
                </div>
                <div className="temas-container">
                    <div className="temas-h4">
                        <h4>Saiba mais sobre:</h4>
                    </div>
                    <div className="temas-btn-container">
                        <button className="btn"><Link className="a" to="/mural/depressao">Depressão</Link></button>
                        <button className="btn"><Link className="a" to="/mural/panico">Síndrome do Pânico</Link></button>
                        <button className="btn"><Link className="a" to="/mural/estresse">Estresse</Link></button>
                        <button className="btn"><Link className="a" to="/mural/bullying">Bullying</Link></button>
                    </div>
                </div>
            </section>
            <Footer />
        </div >
    );
}