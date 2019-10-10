import React, { useState } from 'react';

// Header
import Header from '../../components/Header/index';

import './style.css';

export default function App() {
    return (
        <div className="container">
            <section>
                <h2>Login</h2>
                <div className="login">
                    <form >
                        <label htmlFor="">Seu RM (Registro de Matrícula)</label>
                        <input className="txt" type="text"/>
                        <label htmlFor="">Sua Senha</label>
                        <input className="txt" type="text"/>
                        <button>Fazer Login</button>
                        <div className="utils">
                            <a href="#">Esqueceu a Senha?</a>
                        </div>
                    </form>
                </div>
            </section>
        </div >
    );
}