import React, { useState } from 'react';

// Header
import Header from '../../components/Header/index';

import '../Login/style.css';

export default function App() {
    return (
        <div className="container">
            <section className="secLogin">
                <h2>Cadastro</h2>
                <div className="login">
                    <form >
                        <label htmlFor="">Email</label>
                        <input className="txt" type="text"/>
                        <label htmlFor="">Sua Senha</label>
                        <input className="txt" type="text"/>
                        <button>Cadastrar</button>
                    </form>
                </div>
            </section>
        </div >
    );
}