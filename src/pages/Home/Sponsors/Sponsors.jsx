import React from 'react';
import './Sponsors.css';
import spotify from '../../../assets/spotify.png';
import amazon from '../../../assets/amazon.png';
import google from '../../../assets/google.png';
import telerama from '../../../assets/telerama.png';
import figma from '../../../assets/figma.png';

const Sponsors = () => {
    return (
        <div>
            <section className="logo-section bg-slate-300 p-20 rounded-lg">
                <h1 className="logo-title">Our Sponsors</h1>
                <p className="logo-description">Best Featured Sponsors</p>
                <div className="logo-container">
                    <div className="logo">
                        <img src={spotify} alt=""/>
                    </div>
                    <div className="logo">
                        <img src={amazon} alt=""/>
                    </div>
                    <div className="logo">
                        <img src={google} alt=""/>
                    </div>
                    <div className="logo">
                        <img src={telerama} alt=""/>
                    </div>
                    <div className="logo">
                        <img src={figma} alt=""/>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Sponsors;