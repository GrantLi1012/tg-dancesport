import React from 'react';
import './HeroSection.css';

import homeVideo from '../../asset/home-video.mp4';
import poster from '../../asset/square.png';

import { strings } from '../../config';

const HeroSection = () => {
    return (
        <div className='hero-container'>
            <video src={homeVideo} autoPlay loop muted poster={poster}/>
            <h1>{strings.home.title}</h1>
            <p>{strings.home.slogan}</p>
            <div class="scroll"></div>
        </div>
    );
};

export default HeroSection;