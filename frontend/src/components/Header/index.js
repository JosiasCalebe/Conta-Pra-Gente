import React, { Component } from "react";
import "./style.css";

import {Link} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active : false,
        };
    }

    render() {
        return (
            <nav className="navBar">
                <div className="logo">Conta Pra Gente</div>

                <div className={ this.state.active ? "burger open" : "burger" } onClick={() => this.setState({active: !this.state.active})}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                <div className={ this.state.active ? "centerNavItens nav-active" : "centerNavItens" }>
                    <ul>
                        <li className="pages">
                            <Link className="a" to="/chat"> Chat </Link>
                        </li>
                        <li className="pages">
                            <Link className="a" to="/mural"> Mural </Link>
                        </li>
                        <li className="pages">
                            <Link className="a" to="/videos"> Vídeos </Link>
                        </li>
                        <li>
                            <Link className="a" to="/login"> Login </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default Header;
