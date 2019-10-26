import React, { Component } from "react";
import "./style.css";

import { Link } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false,
        };
    };

    render() {
        return (
            <nav className="navBar">
                <div className="logo"><Link className="logo" to="/">Conta Pra Gente</Link></div>

                <div className={this.state.active ? "burger open" : "burger"} onClick={() => this.setState({ active: !this.state.active })}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>

                <div className={this.state.active ? "centerNavItens nav-active" : "centerNavItens"}>
                    <ul>
                        <li className="pages">
                            <a className="a" href="/#about" onClick={() => this.setState({ active: !this.state.active })}> Sobre nós </a>
                        </li>
                        {/* <li className="pages">
                            <a className="a" href="/#philo" onClick={() => this.setState({ active: !this.state.active })}> Filosofia </a>
                        </li> */}
                        {/* <li className="pages">
                            <a className="a" href="/#chat" onClick={() => this.setState({ active: !this.state.active })}> Chat </a>
                        </li> */}
                        <li className="pages">
                            <a className="a" href="/#mural" onClick={() => this.setState({ active: !this.state.active })}> Mural </a>
                        </li>
                        <li className="pages">
                            <a className="a" href="/#videos" onClick={() => this.setState({ active: !this.state.active })}> Vídeos </a>
                        </li>
                        <li>
                            <Link class="a" to="/links" onClick={() => this.setState({ active: !this.state.active })} > Links </Link>
                        </li>
                        {/* <li>
                            <a className="a" href="/login" onClick={() => this.setState({ active: !this.state.active })}> Login </Link>
                        </li> */}
                    </ul>
                </div>
            </nav>
        );
    }

}

export default Header;
