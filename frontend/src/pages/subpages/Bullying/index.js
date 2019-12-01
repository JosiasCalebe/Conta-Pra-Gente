import React, { Component } from 'react';

// Header
import Header from '../../../components/Header/index';

// Footer 
import Footer from '../../../components/Footer/index';

import '../style.css'

export default class Bullying extends Component {
    render() {
        return (
            <div class="sub-page">
                <Header />
                <div class="sub-section">
                    <h2>Bullying</h2>
                    <div class="sub-content">
                        <div class="sub-container">
                            <h3 class="sub-h3">Bullying x conflito</h3>
                            <p class="sub-p">No bullying, os ataques são intencionais, repetitivos e têm como objetivo maltratar e humilhar; não há justificativa evidente para as agressões. Ele é realizado entre pares – ou seja, entre alunos, mas com uma desigualdade de poder – e na presença de ‘espectadores’.<br/><br/><span class="sub-span"> Vítimas mais comuns:</span><br/>Quem é considerado mais frágil, seja pela renda, orientação sexual, religião, origem, cor ou aparência. Pessoas tímidas ou com baixa autoestima também são alvos, assim como alunos que se destacam por coisas positivas, como beleza e boas notas.</p>
                        </div>
                        <div class="sub-container">
                            <h3 class="sub-h3">Dados</h3>
                            <p class="sub-p">195 mil alunos do 9º ano (7%) afirmaram ter sofrido bullying na escola nos 30 dias anteriores à pesquisa do IBGE em 2015.<br/><br/>16% deles citaram a aparência do corpo como principal motivo para a zombaria; outros 11% citaram o rosto.<br/><br/>520,9 mil alunos (20%) disseram já ter praticado bullying; dentre os meninos, esse percentual foi de 24%, entre as meninas, de 16%.</p>
                        </div>
                        <div class="sub-container">
                            <h3 class="sub-h3">Possíveis sinais:</h3>
                            <ul class="sub-ul">
                                <p class="sub-p"><span class="sub-span">Na escola:</span></p>
                                <li>Mostra-se triste frequentemente;</li>
                                <li>É a última a ser escolhida em atividades e fica isolada ou perto de adultos no recreio;</li>
                                <li>Tem piora nas notas;</li>
                                <li>Anda com ombros encurvados, cabeça baixa e não olha no olho.</li><br/>
                                <p class="sub-p"><span class="sub-span">Em casa:</span></p>
                                <li>Usa desculpas para faltar à aula;</li>
                                <li>Tem mudanças extremas de humor;</li>
                                <li>Gasta mais dinheiro que o habitual na cantina para dar lanche aos outros;</li>
                                <li>Aparece com hematomas após a aula.</li>
                            </ul>
                        </div>
                        <div class="sub-container">
                            <h3 class="sub-h3">Como agir:</h3>
                            <ul class="sub-ul">
                                <li>Observar os filhos;</li>
                                <li>Acionar a escola e discutir soluções;</li>
                                <li>Não dizer coisas do tipo “ignore” ou “não ligue”;</li>
                                <li>Estimulá-los a perceber suas habilidades para resgatar a autoestima;</li>
                                <li>Se preciso, buscar a ajuda de psicólogos.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}