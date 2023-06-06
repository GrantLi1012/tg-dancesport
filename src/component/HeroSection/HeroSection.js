import React from 'react';
import './HeroSection.css';

import homeVideo from '../../asset/home-video.mp4';
import poster from '../../asset/square.png';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src={homeVideo} autoPlay loop muted poster={poster}/>
            <h1>TG DANCESPORT</h1>
            <p>Dance. Happiness. Life. Ballroom Classes in Vancouver.</p>
        </div>
    );
};

export default HeroSection;