import React, { useRef } from 'react';
import './Home.css';
import { HeroSection, ClassCards, Button, Carousel, Testimonial, VideoPlayer } from '../../component';
import { homeStrings } from '../../config';

const Home = () => {
    const refToMainContent = useRef(null);

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

    return (
        <div className="home-container">
            <HeroSection
                handleClick={handleScrollToMainContent}
            />
            <div className="bg-white home-section" ref={refToMainContent}>
                <div className="home-title">{homeStrings.home.section1_title}</div>
                <div className="home-text">{homeStrings.home.section1_content}</div>
                <div className="home-video-wrapper">
                    <VideoPlayer src="https://www.youtube.com/embed/-FbtfDw3oHY" />
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
                <div className="home-title">{homeStrings.home.section3_title}</div>
                <Carousel
                    childrenList={getTestimonialList()}
                />
            </div>
            <div className="bg-grey home-section">
                Gallery
            </div>
        </div>
    )
};

export default Home;