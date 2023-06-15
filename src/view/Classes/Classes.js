import React from 'react';
import './Classes.css';
import { tg4 } from '../../asset';
import { Button, VideoPlayer, Card, Collapsible } from '../../component';
import { externalLinks, classesStrings } from '../../config';
import { useNavigate } from 'react-router-dom';

const Classes = () => {
    const kidsClasses = [classesStrings.classes[0], classesStrings.classes[1]];
    const adultClasses = [classesStrings.classes[2], classesStrings.classes[3], classesStrings.classes[4], classesStrings.classes[5], classesStrings.classes[6]];

    const navigate = useNavigate();

    return (
        <div className='classes-container'>
            <img className='classes-title-img' alt='two-girls-dancing' src={tg4} />
            <div className='classes-title'>
                <h1>Classes We Offer</h1>
                <div className='classes-title-btns'>
                    <div className='classes-btn'>
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--medium'
                            className='classes-btn'
                        >
                            FOR KIDS
                        </Button>
                    </div>
                    <div className='classes-btn'>
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--medium'
                            className='classes-btn'
                        >
                            FOR ADULTS
                        </Button>
                    </div>
                    <div className='classes-btn'>
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--medium'
                            className='classes-btn'
                        >
                            FOR EVENTS
                        </Button>
                    </div>
                    <div className='classes-btn'>
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--medium'
                            className='classes-btn'
                        >
                            MORE INFO
                        </Button>
                    </div>
                </div>
                <div className="classes-down-arrow"></div>
            </div>
            <div className='classes-section'>
                <div className='classes-subtitle'>
                    For Kids
                </div>
                <div className='classes-grid-2'>
                    {kidsClasses.map((item, index) => {
                        return (
                            <Card
                                key={"kids" + index.toString()}
                                src={item.src}
                                text={item.texts}
                                title={item.title}
                            />
                        );
                    })}
                </div>
            </div>
            <div className='classes-section-grey'>
                <div className='classes-subtitle'>
                    For Adults
                </div>
                <div className='classes-grid-2'>
                    {adultClasses.map((item, index) => {
                        return (
                            <Card
                                key={"kids" + index.toString()}
                                src={item.src}
                                text={item.texts}
                                title={item.title}
                            />
                        );
                    })}
                </div>
            </div>
            <div className='classes-section-special'>
                <div className='classes-subtitle-special'>
                    Wedding Dance, Birthday Party, and More
                </div>
                {
                    classesStrings.classes[7].texts.map((item, index) => {
                        return (
                            <div key={index} className='classes-text-special'>
                                {item}
                            </div>
                        )
                    })
                }
                <div className='classes-text-special'>
                    <p className='classes-contact-link' onClick={() => {navigate('/contact')}}>Contact us </p> for a free consultation.
                </div>
            </div>
            <div className='classes-section-special-2'>
                <div className='classes-subtitle-special'>
                    More Info & FAQ
                </div>
                {
                    classesStrings.faq.map((item, index) => {
                        return (
                            <div className='classes-faq'>
                                <Collapsible 
                                    title={item.question}
                                    content={item.answer}
                                />
                            </div>
                        );
                    })
                }
            </div>
            <div className='classes-section'>
                <div className='classes-subtitle'>
                    Video Gallery
                </div>
                <div className='classes-video-grid'>
                    {externalLinks.classes.map((item, index) => {
                        return (
                            <div key={index} className='classes-video'>
                                <VideoPlayer src={item} />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
};

export default Classes;