import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { HeroSection, ClassCards, Button, Carousel, Testimonial, VideoPlayer } from '../../component';
import { homeStrings } from '../../config';
import { team, team2, team3, team4, team5, team6, robson, winterGala } from '../../asset';
import { externalLinks } from '../../config';

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
            {/* winter gala */}
            <div className="home-section" ref={refToMainContent}>
                <div className="home-title">Winter Gala 2025 <span role="img" aria-label="emoji1">🌟🕺💃🎄</span></div>
                <div className="home-text">Join us for an enchanting evening Nov 20!</div>
                <div className="home-text">Performances, Free Lessons, Door Prizes,</div>
                <div className="home-text">And create unforgettable holiday memories together! <span role="img" aria-label="emoji2">🎶✨</span></div>
                <Button
                    buttonStyle='btn--dark'
                    buttonSize='btn--large'
                    onClick={() => window.open('https://www.eventbrite.ca/e/tgdancesport-winter-gala-tickets-1962948910031?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=wsa&aff=ebdsshwebmobile', '_blank')}
                >
                    GET TICKETS
                </Button>
                <br/>
                <div className="home-poster">
                    <img src={winterGala} alt="winter-gala" className="poster-img" />
                </div>
            </div>
            {/* Robson */}
            {/* <div className="home-section">
                <div className="home-title">Dance the night away at Robson Square on July 05! <span role="img" aria-label="emoji1">🌟🕺💃</span></div>
                <div className="home-text">Join us for an enchanting evening at TGDancesport Night at Robson Square on July 05! As part of the Robson Square Summer Dance Series!</div>
                <div className="home-text">This special night features a dazzling Barbie-themed show and an exciting competition showcase!</div>
                <div className="home-text">Whether you're a seasoned dancer or just starting, this magical night under the stars is perfect for everyone.</div>
                <div className="home-text">Don't miss out on the fun and excitement every Friday night this summer. Let's dance, Vancouver! <span role="img" aria-label="emoji2">🎶✨</span></div>
                <div className="home-poster">
                    <img src={robson} alt="robson-night" className="poster-img" />
                </div>
            </div> */}
            <div className="home-section">
                <div className="home-title">{homeStrings.home.section1_title}</div>
                <div className="home-text">{homeStrings.home.section1_content}</div>
                <div className="home-video-wrapper">
                    <VideoPlayer src={externalLinks.homeIntroVideo} />
                </div>
            </div>
            <div className="home-section">
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
            <div className="home-section">
                <div className="home-title">{homeStrings.home.section3_title}</div>
                <Carousel
                    childrenList={getTestimonialList()}
                />
            </div>
            <div className="home-section">
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