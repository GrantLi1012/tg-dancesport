import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { HeroSection, ClassCards, Button, Carousel, Testimonial, VideoPlayer } from '../../component';
import { homeStrings } from '../../config';
import { team, team2, team3, team4, team5, team6 } from '../../asset';
import { externalLinks } from '../../config';

import gala from "../../asset/gala.jpg";

const Home = () => {
    const refToMainContent = useRef(null);
    const galleryList = [team, team2, team3, team4, team5, team6];
    const navigate = useNavigate();

    // scroll to main content then move up a little bit to avoid navbar
    const handleScrollToMainContent = () => {
        window.scrollTo({
            top: refToMainContent.current.offsetTop - 80,
            behavior: "smooth"
        });
    };

    const getTestimonialList = () => {
        const testimonialList = homeStrings.home_testimonials;
        const result = [];
        testimonialList.forEach((item, index) => {
            result.push(
                <Testimonial
                    key={index}
                    testimonial={item.testimonial}
                    author={item.author}
                />
            );
        });
        return result;
    };

    const getGalleryList = () => {
        const result = [];
        galleryList.forEach((item, index) => {
            result.push(
                <img
                    key={index}
                    className="gallery-img"
                    alt="gallery"
                    src={item}
                />
            );
        });
        return result;
    };

    const goToClasses = () => {
        navigate('/classes');
    };

    return (
        <div className="home-container">
            <HeroSection
                handleClick={handleScrollToMainContent}
            />
            <div className="bg-grey home-section" ref={refToMainContent}>
                <div className="home-title">{homeStrings.home.section1_title}</div>
                <div className="home-text">{homeStrings.home.section1_content}</div>
                <div className="home-video-wrapper">
                    <VideoPlayer src={externalLinks.homeIntroVideo} />
                </div>
            </div>
            <div className="bg-white home-section">
                <div className="home-title">{homeStrings.home.section2_title}</div>
                <div className="home-text">{homeStrings.home.section2_content}</div>
                <ClassCards />
                <Button
                    buttonStyle='btn--dark'
                    buttonSize='btn--large'
                    onClick={goToClasses}
                >
                    LEARN MORE
                </Button>
            </div>
            <div className="bg-grey home-section">
                <div className="home-title">{homeStrings.home.section3_title}</div>
                <Carousel
                    childrenList={getTestimonialList()}
                />
            </div>
            <div className="bg-white home-section">
                <div className="home-title">{homeStrings.home.section4_title}</div>
                <Carousel
                    childrenList={getGalleryList()}
                    small
                />
            </div>
        </div>
    )
};

export default Home;