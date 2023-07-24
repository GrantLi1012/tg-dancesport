import React, { useRef } from 'react';
import './About.css';
import { tg1, tg2, tg3, tg4, tg5, tg6, tg7, tg8, tp1, tp2, tp3, tp4, tp5, tp6, tp7, tp8, tp9, tp10 } from '../../asset';
import { Carousel } from '../../component';
import { aboutStrings, sponsorsInfo } from '../../config';

const About = () => {
    const refToMainContent = useRef(null);
    const aboutGalleryList = [tp1, tp2, tp3, tp4, tp5, tp6, tp7, tp8, tp9, tp10, tg1, tg2, tg3, tg4, tg5, tg6, tg7, tg8];

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
                <h1>Anthony Chong & Gloria Chien</h1>
                <div className="down-arrow" onClick={handleScrollToMainContent}></div>
            </div>
            <div className="about-section divider" ref={refToMainContent}>
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
            <div className="about-gallery divider">
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
            <div className="about-section">
                <div className='about-section-subtitle'>
                    Our Sponsors
                </div>
                <div className='about-sponsors'>
                    {sponsorsInfo.map((item, index) => {
                        return (
                            <div className='about-sponsor-item'>
                                <a href={item.link} target='_blank' rel="noopener noreferrer" style={{textDecoration: "none", color: "white"}}>
                                    <img alt={"sponsor " + item.name} className="about-sponsor-img" src={item.image} />
                                </a>
                                <div className='about-sponsor-text'>
                                    {item.name}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
};

export default About;