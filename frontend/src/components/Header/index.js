import React, { Component } from "react";
import "./style.css";

import {disableBodyScroll, enableBodyScroll} from 'body-scroll-lock';

import {Link} from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active : false,
        };
    };

    componentDidMount() {
        this.element = window;
    }

    scroll = () => {
        this.state.active ? disableBodyScroll(this.element) : enableBodyScroll(this.element);
      };    

    render() {
        return (
            <nav className="navBar">
                <div className="logo"><Link className="logo" to="/">Conta Pra Gente</Link></div>

                <div className={ this.state.active ? "burger open" : "burger" } onClick={() => {this.setState({active: !this.state.active}); this.scroll();}}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                <div className={ this.state.active ? "centerNavItens nav-active" : "centerNavItens" }>
                    <ul>
                        <li className="pages">
                            <a className="a" href="/#chat" onClick={() => this.scroll()}> Chat </a>
                        </li>
                        <li className="pages">
                            <a className="a" href="/#mural" onClick={() => this.scroll()}> Mural </a>
                        </li>
                        <li className="pages">
                            <a className="a" href="/#videos" onClick={() => this.scroll()}> Vídeos </a>
                        </li>
                        <li>
                            <a className="a" href="/login" onClick={() => this.scroll()}> Login </a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }

}

export default Header;
