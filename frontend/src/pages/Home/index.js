import React from 'react';

// Header
import Header from '../../components/Header/index';

// Footer
import Footer from '../../components/Footer/index';

// Imagens
import SecImage from '../../components/SVG/svgHome';
import YouTubeLogo from '../../components/SVG/youtube.png';
import JornadaPazLogo from '../../assets/LogoJornadaPazNasEscolas.png';
import ContaPraGenteTeam from '../../assets/ContaPraGenteTeam.jpg';

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
              <p>A ideia originou-se no Ideathon organizado pelo Sesi, no projeto Jornada da Paz <br /> <button className="btn"><a href="/#idea">Saiba mais</a></button></p>
            </div>
            <div className="shadow"></div>
          </div>
          <div className="abtCont">
            <div className="abtText">
              <h3>O que é o Conta Pra Gente?</h3>
              <p>Conta Pra Gente é uma plataforma com o objetivo geral de levar conforto, conhecimento e apoio para aqueles que estão em conflito, seja com os outros ou consigo mesmo.</p>
            </div>
            <div className="shadow"></div>
          </div>
          <div className="abtCont">
            <div className="abtText">
              <h3>Qual é o objetivo da plataforma?</h3>
              <p>Queremos que adolescentes sintam-se ouvidos e abraçados. Uma comunicação que ocorre de jovem para jovem, trazendo conforto no momento do desabafo.</p>
            </div>
            <div className="shadow"></div>
          </div>
        </div>
      </section>

      <section id="idea" className="secIdea">
        <h2 className="ideaTitle">Surgimento da ideia</h2>
        <div className="ideaCont row1">
          <p>Uma das atividades da Jornada paz nas escolas foi o Ideathon, maratona de ideias que reuniu 60 alunos e professores das unidades do Sesi-SP de Campinas e do bairro do Ipiranga, na capital. A proposta do concurso foi desenvolver projetos de comunicação e mobilização pela paz nas escolas tendo como tema o combate ao bullying.</p>
          <img src={JornadaPazLogo} alt="Logo Jornada Paz nas Escolas"/>
        </div>
        <div className="ideaCont row2">
          <p>O grupo <span>Conta pra gente</span> – composto por cinco alunos, três da unidade Ipiranga e dois do Sesi Campinas (Amoreiras) – foi o grande vencedor e garantiu como prêmio uma viagem ao Rio de Janeiro onde participaram de uma Oficina Geração Futura, na sede do Canal Futura. Mais do que isso, os vencedores tem a missão de colocar em prática o projeto concebido.</p>
          <img src={ContaPraGenteTeam} alt="Premiação Jornada Paz nas Escolas"/>
        </div>
      </section>
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
          <button className="btn"><Link className="a" to="/mural">Acesse o Mural</Link></button>
        </div>
      </section>
      <section id="videos" className="sec4">
        <div className="cont">
          <h2>Vídeos</h2>
          <div className="pCont">
            Os Vídeos falaram sobre assuntos cotidianos
          </div>
          <button className="btn"><Link className="a" to="/videos">Veja os Vídeos</Link></button>
        </div>
        <div className="video">
          <img src={YouTubeLogo} alt="Logo do Youtube" />
        </div>
      </section>
      <Footer />
    </div >
  );
}