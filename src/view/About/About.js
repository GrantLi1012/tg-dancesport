import React, { useRef } from 'react';
import './About.css';
import { tg1, tg2, tg3, tg4, tg5, tg6, tg7, tg8 } from '../../asset';
import { Carousel } from '../../component';
import { aboutStrings } from '../../config';


const About = () => {
    const refToMainContent = useRef(null);
    const aboutGalleryList = [tg1, tg2, tg3, tg4, tg5, tg6, tg7, tg8];

    const handleScrollToMainContent = () => {
        window.scrollTo({
            top: refToMainContent.current.offsetTop - 80,
            behavior: "smooth"
        });
    };

    const getAboutGalleryList = () => {
        const result = [];
        aboutGalleryList.forEach((item, index) => {
            result.push(
                <img
                    key={index}
                    className="about-gallery-img"
                    alt="gallery"
                    src={item}
                />
            );
        });
        return result;
    };

    return (
        <div className="about-container">
            <img alt="tg1" className="about-title-img"  src={tg1} />
            <div className="about-title">
                <h1>Tony Chong & Gloria Chien</h1>
                <div className="down-arrow" onClick={handleScrollToMainContent}></div>
            </div>
            <div className="about-section" ref={refToMainContent}>
                <div className='about-section-subtitle'>
                    Who We Are
                </div>
                { aboutStrings.about.map((item, index) => {
                    return (
                        <div key={index + "1"} className="about-section-text">
                            {item}
                        </div>
                    );
                })}
                <div className='about-section-subtitle'>
                    What We Do
                </div>
                { aboutStrings.offering.map((item, index) => {
                    return (
                        <div key={index + "2"} className="about-section-text">
                            {item}
                        </div>
                    );
                })}
            </div>
            <div className="about-gallery">
                <div className='about-section-subtitle'>
                    Gallery
                </div>
                <div className="about-carousel">
                    <Carousel
                        childrenList={getAboutGalleryList()}
                        small
                        whiteBtn
                    />
                </div>
                
            </div>
        </div>
    )
};

export default About;