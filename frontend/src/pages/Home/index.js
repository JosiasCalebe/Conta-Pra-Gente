import React, { useState } from 'react';

// Teste Header
import Header from '../../components/Header/index';

// Imagens
import SecImage from '../../components/SVG/svgHome';
import Online from '../../components/SVG/online.png';

import './style.css'

export default function App() {

  const styleSVG = {
    width: '550',
    height: '400'
  }

  return (
    <div id="home" className="container">
      <Header />
      <section className="sec1">
        <div className="boxContent">
          <div className="slogan">De jovem pra jovem <br /> <span>Conta Pra Gente</span></div>
          <div className="subSlogan">A plataforma que junta jovens para conversar e se ajudarem</div>
        </div>
        <div className="imageBox">
          <SecImage width={styleSVG.width} height={styleSVG.height} />
        </div>
      </section>
      <section className="sec2" id="chat">
        <div className="cont">
          <h2>Chat</h2>
          <div className="pCont">
            O Chat junta jovens para conversarem e se ajudarem
          </div>
          <button className="btn">Entre no Chat</button>
        </div>
        <div className="chatCont">
          <div className="infoBar">
            <h3>Mediador <img src={Online} alt="Online icon"/></h3>
              <div className="quit">
                <div className="x"></div>
                <div className="x"></div>
              </div> 
            </div>
          <div className="messages">
            <div className="welcomeChat">
              <h3>Bem Vindo ao <span><a href="/#home">Conta Pra Gente</a></span>!</h3>
            </div>
            <div className="chatMessages">
              <div className="userMessages">
                
              </div>
              <div className="myMessages"></div>
            </div>
          </div>
          <div className="chatInput">
            <div className="textChat">Escreva sua mensagem...</div>
            <div className="btnChat">Enviar</div>
          </div>
        </div>
      </section>
    </div >
  );
}