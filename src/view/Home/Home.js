import React from 'react';
import './Home.css';
import { HeroSection } from '../../component';

const Home = () => {
    return (
        <div className="home-container">
            <HeroSection />
            <div>Slogan and simple intro</div>
            <div>Cards on classes offered</div>
            <div>What students are saying</div>
            <div>Gallery</div>
        </div>
    )
};

export default Home;