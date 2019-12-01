import React, { Component } from 'react';

// Header
import Header from '../../../components/Header/index';

// Footer 
import Footer from '../../../components/Footer/index';

import '../style.css'

export default class Drepessao extends Component {
    render() {
        return (
            <div class="sub-page">
                <Header />
                <div class="sub-section">
                    <h2>Depressão</h2>
                    <div class="sub-content">
                        <div class="sub-container">
                            <h3 className="sub-h3">O que é Depressão?</h3>
                            <p class="sub-p">
                                A depressão é um problema médico grave e bem presente na sociedade. Segundo estudos, elas esta presente em cerca de 15,5% da população. A época mais comum para o surgimento é em torno dos 30 anos mas pode acontecer em qualquer idade. Em media, 21% das mulheres e 12% dos homens sofrem com essa doença.</p>
                        </div>
                        <div class="sub-container">
                            <h3 class="sub-h3">Causas</h3>
                            <p class="sub-p"><span class="sub-span">Genética:</span> estudos com famílias, gêmeos e adotados mostram que há um fator genético presente. Estima-se que esse componente represente 40% da probabilidade para desenvolver depressão;</p>
                            <p class="sub-p"><span class="sub-span">Bioquímica cerebral:</span> há evidencias de deficiência de substancias cerebrais, chamadas neurotransmissores. São eles Noradrenalina, Serotonina e Dopamina que estão envolvidos na regulação da atividade motora, do apetite, do sono e do humor;</p>
                            <p class="sub-p"><span class="sub-span">Eventos vitais:</span> eventos estressantes podem desencadear episódios depressivos naqueles que tem uma predisposição genética a desenvolver a doença.</p>
                        </div>
                        <div class="sub-container">
                            <h3 class="sub-h3">Fatores de risco que podem contribuir para o desenvolvimento:</h3>
                            <ul className="sub-ul">
                                <li>Histórico familiar;</li>
                                <li>Transtornos psiquiátricos correlatos;</li>
                                <li>Estresse crônico;</li>
                                <li>Ansiedade crônica;</li>
                                <li>Disfunções hormonais;</li>
                                <li>Dependência de álcool e drogas ilícitas;</li>
                                <li>Traumas psicológicos;</li>
                                <li>Doenças cardiovasculares, endocrinológicas, neurológicas, neoplasias entre outras;</li>
                                <li>Conflitos conjugais;</li>
                                <li>Mudança brusca de condições financeiras e desemprego</li>
                            </ul>
                        </div>
                        <div class="sub-container">
                            <h3 class="sub-h3">Sintomas</h3>
                            <ul class="sub-ul">
                                <li>Retardo motor, falta de energia, preguiça ou cansaço excessivo, falta de concentração, queixas de falta de memória, de vontade e de iniciativa;</li>
                                <li>Redução do interesse sexual;</li>
                                <li>Dores e sintomas físicos difusos como mal estar, cansaço, dor no peito, taquicardia, sudorese.</li>
                                <li><span class="sub-span">Humor depressivo:</span> sensação de tristeza, desvalorização e sentimento de culpa. Acreditam que perderam, de forma irreversível, a capacidade de sentir prazer ou alegria. Tudo parece vazio, o mundo é visto sem cores, sem alegria. Muitos se mostram mais apáticos do que tristes, referindo “sentimento de falta de sentimento”. Julgam-se um peso para os familiares e amigos, invocam a morte como forma de alívio para si e familiares. Fazem avaliação negativa sobre de si mesmo, do mundo e do futuro. Percebem as dificuldades como insuperáveis, tendo o desejo de por fim a esses sentimentos ruins. Os pensamentos suicidas variam desde o desejo de estar morto até planos detalhados de se matar. Esses pensamentos devem ser investigados;</li>
                                <li><span class="sub-span">Insônia ou sonolência:</span> a insônia geralmente é intermediária ou terminal. A sonolência está mais associada à depressão chamada Atípica;</li>
                                <li><span class="sub-span">Apetite:</span>geralmente diminuído, podendo ocorrer em algumas formas de depressão aumento do apetite, com maior interesse por carboidratos e doces;</li>
                            </ul>
                        </div>
                        <div class="sub-container">
                            <h3 class="sub-h3">Diagnóstico</h3>
                            <p class="sub-p">O diagnóstico da depressão é clínico, feito pelo médico após coleta completa da história do paciente e realização de um exame do estado mental. Não existe exames laboratoriais específicos para diagnosticar depressão.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}