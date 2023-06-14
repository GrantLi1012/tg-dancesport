import React from 'react';
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

import homeVideo from '../../asset/home-video.mp4';
import poster from '../../asset/home-poster.jpeg';

import { homeStrings } from '../../config';
import { Button } from '../Button/Button';

const HeroSection = (props) => {
    const {handleClick = ()=>{}} = props;
    const navigate = useNavigate();

    const goToClasses = () => {
        navigate('/classes');
    }

    const goToAbout = () => {
        navigate('/about');
    }

    return (
        <div className='hero-container'>
            <video src={homeVideo} autoPlay loop muted poster={poster}/>
            <h1>{homeStrings.home.title}</h1>
            <p>{homeStrings.home.slogan}</p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={goToClasses}
                >
                    CLASSES
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={goToAbout}
                >
                    OUR STORY
                </Button>
            </div>
            <div className="scroll" onClick={handleClick}></div>
        </div>
    );
};

export default HeroSection;