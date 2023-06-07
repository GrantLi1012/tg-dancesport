import React from 'react';
import './Home.css';
import { HeroSection, ClassCards, Button } from '../../component';
import { homeStrings } from '../../config';

const Home = () => {
    return (
        <div className="home-container">
            <HeroSection />
            <div className="bg-white home-section">
                <div className="home-title">{homeStrings.home.section1_title}</div>
                <div className="home-text">{homeStrings.home.section1_content}</div>
                <div className="home-video-wrapper">
                    <div className="home-video-container">
                        <iframe className="home-video" src="https://www.youtube.com/embed/-FbtfDw3oHY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>
            <div className="bg-grey home-section">
                <div className="home-title">{homeStrings.home.section2_title}</div>
                <div className="home-text">{homeStrings.home.section2_content}</div>
                <ClassCards />
                <Button
                    buttonStyle='btn--dark'
                    buttonSize='btn--large'
                >
                    SEE ALL CLASSES
                </Button>
            </div>
            <div className="bg-white home-section">
                What students are saying
            </div>
            <div className="bg-grey home-section">
                Gallery
            </div>
        </div>
    )
};

export default Home;