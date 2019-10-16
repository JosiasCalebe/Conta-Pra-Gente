import React, { useState } from 'react';

// Header
import Header from '../../components/Header/index';

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
                        <div className="postit"><p>Tati Bernardi</p></div>
                        <div className="phrase">Aquele abraço era o lado bom da vida, mas para valorizá-lo eu precisava viver. E que irônico: pra viver eu precisava perdê-lo...</div>
                    </div>
                    <div className="muralCont">
                        <div className="postit"><p>Chorão</p></div>
                        <div className="phrase">Não menospreze o dever que a consciência te impõe, valorize a vida!</div>
                    </div>
                    <div className="muralCont">
                        <div className="postit"><p>Alessandro Ferraro</p></div>
                        <div className="phrase">Saber valorizar cada momento da vida ao lado de um alguém especial é poder cativar cada vez mais o sentimento que um sente pelo outro...</div>
                    </div>
                    <div className="muralCont">
                        <div className="postit"><p>Vanessa Pimentel</p></div>
                        <div className="phrase">A vida me ensinou que a melhor parte é aquela que você aprende a se valorizar.</div>
                    </div>
                </div>
            </section>

        </div >
    );
}