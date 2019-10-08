import React, { useState } from 'react';

// Header
import Header from '../../components/Header/index';

// ChatModal
import Chat from '../../components/ChatModal/index';

// Imagens
import SecImage from '../../components/SVG/svgHome';
import YouTubeLogo from '../../components/SVG/youtube.png';


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
        <Chat />
      </section>
      <section className="sec3">
        <div className="cont">
          <h2>Mural</h2>
          <div className="pCont">
            O Mural tem depoimentos e frases motivacionais
          </div>
          <button className="btn">Acesse o Mural</button>
        </div>
      </section>
      <section className="sec4">
        <div className="cont">
          <h2>Vídeos</h2>
          <div className="pCont">
            Os Vídeos falaram sobre assuntos cotidianos
          </div>
          <button className="btn">Veja os Vídeos</button>
        </div>
        <div className="video">
          <img src={YouTubeLogo} alt="Logo do Youtube"/>
        </div>
      </section>
    </div >
  );
}