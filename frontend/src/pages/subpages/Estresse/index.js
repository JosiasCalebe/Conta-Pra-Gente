import React, { Component } from 'react';

// Header
import Header from '../../../components/Header/index';

// Footer 
import Footer from '../../../components/Footer/index';

import '../style.css'

export default class Estresse extends Component {
    render() {
        return (
            <div class="sub-page">
                <Header />
                <div class="sub-section">
                    <h2>Estresse</h2>
                    <div class="sub-content">
                        <div class="sub-container">
                            <h3 class="sub-h3">O que é o Estresse?</h3>
                            <p class="sub-p">Você já experimentou a sensação de ter as mãos suadas diante de um primeiro encontro? Em uma entrevista de emprego ou uma apresentação em público? Já sentiu seu coração bater acelerado diante de um filme de terror? Se a resposta foi sim, você sabe como é sentir estresse em seu corpo e mente.<br/><br/>Essa resposta automática do nosso organismo foi desenvolvida em nossos antepassados como uma forma de protegê-los de predadores e outras ameaças. Diante do perigo, nosso corpo entra em ação. Inundando nossa corrente sanguínea com hormônios que elevam a frequência cardíaca.  Aumentam a pressão arterial e a energia, preparando o indivíduo para lidar com o problema.<br/><br/>Nos dias atuais, você não enfrenta mais a ameaça de ser comido por um predador mas você com certeza convive com múltiplos desafios diariamente.  Como o cumprimento de prazos, pagamento de contas e malabarismos para conciliar carreira e família. Esses desafios fazem você sentir o stress da mesma forma.<br/><br/>Como resultado, o sistema de alarme natural do corpo –  a resposta para a “luta ou a fuga” – pode ficar ligado constantemente. Isto pode trazer consequências sérias para a saúde.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}