import React from 'react';

// Style
import './style.css';

// Header
import Header from '../../components/Header/index';

// Footer
import Footer from '../../components/Footer/index';

export default function App() {
    return (
        <div className="container">
            <Header />
            <section className="link-main-sec">
                <div class="link-title">
                    <h2>Links Úteis</h2>
                    <h4>Para conhecer mais sobre voluntariado, apoio emocional, prevenção do suicídio, saúde mental e outros temas afins, acesse também:</h4>
                </div>
                <div class="link-content">
                    <div class="link-list-links">
                        <h5>Portal Ministério da Saude (MS)</h5>
                        <a href="http://portalms.saude.gov.br/saude-de-a-z/suicidio">http://portalms.saude.gov.br/saude-de-a-z/suicidio</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Centro de Atenção Psicosocial (CAPS)</h5>
                        <a href="http://sage.saude.gov.br/paineis/planoCrack/lista_caps.php?output=html">http://portalms.saude.gov.br/saude-para-voce/saude-mental/acoes-e-programas-saude-mental/centro-de-atencao-psicossocial-caps</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Centro de Referência de Assistência Social (CRAS)</h5>
                        <a href="http://mds.gov.br/assuntos/assistencia-social/unidades-de-atendimento/cras">http://mds.gov.br/assuntos/assistencia-social/unidades-de-atendimento/cras</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Movimento Setembro Amarelo, Dia mundial de Prevenção ao Suicídio</h5>
                        <a href="http://www.setembroamarelo.org.br/">http://www.setembroamarelo.org.br/</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Educação Emocional</h5>
                        <a href="http://www.amigosdozippy.org.br/">http://www.amigosdozippy.org.br/</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Associação Brasileira de Psiquiatria</h5>
                        <a href="http://www.abp.org.br">http://www.abp.org.br/</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Rede Brasiliera de Prevenção ao Suicídio</h5>
                        <a href="http://www.rebraps.com.br/">http://www.rebraps.com.br/</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Informações sobre prevenção do suicídio</h5>
                        <a href="http://www.prevencaosuicidio.blog.br">www.prevencaosuicidio.blog.br</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Transtornos mentais e dependência química</h5>
                        <a href="http://www.franciscajulia.org.br">http://www.franciscajulia.org.br</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Associação Brasileira de Estudos e Prevenção de Suicídios</h5>
                        <a href="http://www.abeps.org.br/">http://www.abeps.org.br/</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Sociedade Portuguesa de Suicidologia</h5>
                        <a href="http://www.spsuicidologia.pt">http://www.spsuicidologia.pt</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Samaritanos de Londres</h5>
                        <a href="http://www.samaritans.org">http://www.samaritans.org</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Befrienders Worldwide</h5>
                        <a href="http://www.befrienders.org">http://www.befrienders.org</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Associação Internacional para a Prevenção do Suicídio</h5>
                        <a href="http://www.iasp.info">http://www.iasp.info</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Associação Americana de Suicidologia</h5>
                        <a href="http://www.suicidology.org/">http://www.suicidology.org/</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Telefono amigo-Italia</h5>
                        <a href="http://www.telefonoamigo.org">http://www.telefonoamigo.org</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Voz de apoio – Portugal</h5>
                        <a href="http://www.vozdeapoio.pt">http://www.vozdeapoio.pt</a>
                    </div>
                    <div class="link-list-links">
                        <h5>Fundação Americana de Prevenção de Suicídio</h5>
                        <a href="https://afsp.org/">https://afsp.org/</a>
                    </div>                  
                </div>
            </section>
            <Footer/>
        </div >
    );
}