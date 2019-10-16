import React, { useState } from 'react';

// Header
import Header from '../../components/Header/index';

// Check images
import View from '../../assets/view.png';
import Hide from '../../assets/hide.png';

import './style.css';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };
    };

    render() {
        return (
            <div className="container">
                <section className="secLogin">
                    <h2>Login</h2>
                    <div className="login">
                        <form >
                            <label htmlFor="">Seu RM (Registro de Matrícula)</label>
                            <input className="txt" type="text" />
                            <label htmlFor="">Sua Senha</label>
                            <div className="password">
                                <input className="txt pwd" type={this.state.active ? "text" : "password"} />
                                <img src={View} onClick={() => this.setState({ active: !this.state.active })} style={{ display: this.state.active ? "none" : "" }} />
                                <img src={Hide} onClick={() => this.setState({ active: !this.state.active })} style={{ display: !this.state.active ? "none" : "" }} />
                            </div>
                            <button>Logar</button>
                            <div className="utils">
                                <a href="#">Esqueceu a Senha?</a>
                            </div>
                        </form>
                    </div>
                </section>
            </div >
        );
    };
}

export default Login;