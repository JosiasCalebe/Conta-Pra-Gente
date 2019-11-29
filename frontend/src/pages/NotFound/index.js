import React, { useState } from 'react';

// Header
import Header from '../../components/Header/index';

// Image
import NotFound from '../../assets/not-found.png';

import './style.css';

export default function App() {
    return (
        <div className="window">
            <Header />
            <div className="notFound">
                <div className="notFound-container">
                    <div className="notFound-img">
                        <img src={NotFound} alt="Not found"/>
                    </div>
                    <div className="notFound-h4">
                        <h4>Essa página não foi encontrada.</h4>
                    </div>
                </div >
            </div>
        </div>
            );
}