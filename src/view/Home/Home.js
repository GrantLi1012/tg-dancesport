import React from 'react';
import './Home.css';
import { HeroSection } from '../../component';
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
                        <iframe class="home-video" src="https://www.youtube.com/embed/-FbtfDw3oHY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className="bg-grey home-section">
                Cards on classes offered
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