import React from 'react';

// Header
import Header from '../../components/Header/index';

// ChatModal
import Chat from '../../components/ChatModal/index';

// Footer
import Footer from '../../components/Footer/index';

// Imagens
import SecImage from '../../components/SVG/svgHome';
import YouTubeLogo from '../../components/SVG/youtube.png';

import { Link } from 'react-router-dom';


import './style.css'

export default function App() {

  const styleSVG = {
    width: '600',
    height: '95%'
  }

  return (
    <div id="home" className="container">
      <Header />
      <section className="sec1">
        <div className="main">
          <div className="boxContent">
            <div className="slogan">De jovem pra jovem <br /> <span>Conta Pra Gente</span></div>
            <div className="subSlogan">A plataforma que junta jovens para conversar e se ajudarem</div>
          </div>
          <div className="imageBox">
            <SecImage width={styleSVG.width} height={styleSVG.height} />
          </div>
        </div>
        <div class="box">
          <a href="/#about">
            <span></span>
            <span></span>
          </a>
        </div>
      </section>
      <section id="about" className="secAbt">
        <h1>Um pouco sobre nós...</h1>
        <div className="abtBox">
          <div className="abtCont">
            <div className="abtText">
              <h3>Como surgiu a ideia?</h3>
              <p>A ideia originou-se no Ideathon organizado pelo Sesi, no projeto Jornada da Paz</p>
            </div>
            <div className="shadow"></div>
          </div>
          <div className="abtCont">
            <div className="abtText">
              <h3>O que é o Conta Pra Gente?</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quod non facere iure nisi, excepturi quia dolore voluptatibus, consequatur reiciendis suscipit atque dolores hic nulla recusandae quaerat libero. Sit, nobis? lo</p>
            </div>
            <div className="shadow"></div>
          </div>
          <div className="abtCont">
            <div className="abtText">
              <h3>Qual é o objetivo da plataforma?</h3>
              <p>Lorem ipsum dolor sit amet consecsequatur reiciendis suscipit atque dolores hic nulla recusandae quaerat libero. Sit, nobis? lo</p>
            </div>
            <div className="shadow"></div>
          </div>
        </div>
      </section>
      {/* <section className="secPhilo">
        
      </section> */}
      {/* <section className="sec2" id="chat">
        <div className="cont">
          <h2>Chat</h2>
          <div className="pCont">
            O Chat junta jovens para conversarem e se ajudarem
          </div>
          <button className="btn"><a className="a" href="http://www.robonaticos111.wixsite.com/conta-pra-gente">Entre no Chat</a></button>
        </div>
        <Chat />
      </section> */}
      <section id="mural" className="sec3">
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
        <div className="cont">
          <h2>Mural</h2>
          <div className="pCont">
            O Mural tem depoimentos e frases motivacionais
          </div>
          <button className="btn"><a className="a" href="http://www.robonaticos111.wixsite.com/conta-pra-gente">Acesse o Mural</a></button>
        </div>
      </section>
      <section id="videos" className="sec4">
        <div className="cont">
          <h2>Vídeos</h2>
          <div className="pCont">
            Os Vídeos falaram sobre assuntos cotidianos
          </div>
          <button className="btn"><a className="a" href="http://www.robonaticos111.wixsite.com/conta-pra-gente">Veja os Vídeos</a></button>
        </div>
        <div className="video">
          <img src={YouTubeLogo} alt="Logo do Youtube" />
        </div>
      </section>
      <Footer />
    </div >
  );
}