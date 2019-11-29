import React, { useState } from 'react';

// Header
import Header from '../../components/Header/index'

// Footer
import Footer from '../../components/Footer/index';

import './style.css';

export default function App() {

    return (
        <div className="container">
            <Header />
            <section className="secVid">
                <h2>Vídeos</h2>
                <div className="vidCont">
                    <div className="vidSec">
                        <div className="vidFrame">
                        <iframe src="https://www.youtube.com/embed/W7VEqUYeww4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="vidDesc">
                            <h4 className="videoTitle">Bullying</h4>
                            <p className="videoDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at quam debitis, enim, iusto quidem doloremque neque ratione optio dolores nemo magnam pariatur quos officia exercitationem! Veritatis eveniet molestias dolore.</p>
                        </div>
                    </div>
                    <div className="vidSec">
                        <div className="vidFrame">
                        <iframe src="https://www.youtube.com/embed/6m4Lia7f33Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="vidDesc">
                            <h4 className="videoTitle">Depressão</h4>
                            <p className="videoDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam at quam debitis, enim, iusto quidem doloremque neque ratione optio dolores nemo magnam pariatur quos officia exercitationem! Veritatis eveniet molestias dolore.</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div >
    );
}