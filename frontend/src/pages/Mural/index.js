import React, { useState } from 'react';

// Header
import Header from '../../components/Header/index';

export default function App() {
    return (
        <div className="container">
            <Header />
            <section>
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
                </div>
            </section>

        </div >
    );
}