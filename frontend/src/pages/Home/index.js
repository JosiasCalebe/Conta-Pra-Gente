import React, { useState } from 'react';

// Teste Header
import Header from '../../components/Header/index';

// Imagens
import SecImage from '../../components/SVG/svgHome';

import './style.css'

export default function App() {

  return (
    <div className="container">
      <Header />
      <section className="sec1">
        <div className="boxContent">
          <div className="slogan">De jovem pra jovem <br /> <span>Conta Pra Gente</span></div>
          <div className="subSlogan">A plataforma que junta jovens para conversar e se ajudarem</div>
        </div>
        <div className="imageBox">
          <SecImage />
        </div>
      </section>
    </div >
  );
}