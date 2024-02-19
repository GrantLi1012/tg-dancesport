import React, {useRef} from 'react';
import './Classes.css';
import { tg4 } from '../../asset';
import { Button, VideoPlayer, Card, Collapsible } from '../../component';
import { externalLinks, classesStrings } from '../../config';
import { useNavigate } from 'react-router-dom';

const Classes = () => {
    const kidsClasses = [classesStrings.classes[0], classesStrings.classes[1]];
    const adultClasses = [classesStrings.classes[2], classesStrings.classes[3], classesStrings.classes[4], classesStrings.classes[5], classesStrings.classes[6]];

    const navigate = useNavigate();

    const refKids = useRef(null);
    const refAdults = useRef(null);
    const refEvents = useRef(null);
    const refInfo = useRef(null);

    const scrollToKids = () => window.scrollTo({
        top: refKids.current.offsetTop - 80,
        behavior: "smooth"
    });

    const scrollToAdults = () => window.scrollTo({
        top: refAdults.current.offsetTop - 80,
        behavior: "smooth"
    });

    const scrollToEvents = () => window.scrollTo({
        top: refEvents.current.offsetTop - 80,
        behavior: "smooth"
    });

    const scrollToInfo = () => window.scrollTo({
        top: refInfo.current.offsetTop - 80,
        behavior: "smooth"
    });

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
                            onClick={scrollToKids}
                        >
                            FOR KIDS
                        </Button>
                    </div>
                    <div className='classes-btn'>
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--medium'
                            className='classes-btn'
                            onClick={scrollToAdults}
                        >
                            FOR ADULTS
                        </Button>
                    </div>
                    <div className='classes-btn'>
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--medium'
                            className='classes-btn'
                            onClick={scrollToEvents}
                        >
                            FOR EVENTS
                        </Button>
                    </div>
                    <div className='classes-btn'>
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--medium'
                            className='classes-btn'
                            onClick={scrollToInfo}
                        >
                            MORE INFO
                        </Button>
                    </div>
                </div>
                <div className="classes-down-arrow"></div>
            </div>
            <div className='classes-section' ref={refKids}>
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
                <div className='classes-subtitle'>
                    Kids Program Winter 2024
                </div>
                <div className='classes-text'>
                    <div style={{fontWeight:500}}>Dates:</div>
                    <div>Jan 20, 27;</div>
                    <div>Feb 03, 10, 17, 24;</div>
                    <div>March 02;</div>
                    <div> </div>
                    <div style={{fontWeight:500}}>Address:</div>
                    <div>140-8833 Odlin Crescent, Richmond;</div>
                    <div>*Plenty of free parking in the back*</div>
                    <div style={{fontWeight:500}}>Time:</div>
                    <div>12:00-12:50  Mini Dancer 4-6 y.o.;</div>
                    <div>12:00-12:50  Young Dancer 7-10 y.o., and beginners;</div>
                    <div>1:00-1:50  Junior Dancer 11+;</div>
                    <div style={{fontWeight:500}}>Tuition: $150.</div>
                    <div>*No refunds </div>
                    <div>**All discounts and promotions can not be combined.</div>
                    <div>***We reserve the right to cancel classes with full refund if it does not meet minimum registration requirements or for un-forseen circumstances. </div>
                    <div>​Contact us for more information.</div>
                </div>
            </div>
            <div className='classes-section-grey' ref={refAdults}>
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
                <div className='classes-subtitle'>
                    Adult Classes Winter 2024
                </div>
                <div className='classes-text'>
                    <div style={{fontWeight:500}}>Ballroom Intro in Calgary</div>
                    <div>Date: </div>
                    <div>Jan. 27;</div>
                    <div>Feb 10, 24;</div>
                    <div>Mar. 02, 16, 30</div>
                    <div>Time: Saturdays 1:00-2:00pm</div>
                    <div>Location: Olympia Dance Club, 517 16th Ave NE, Calgary, AB.</div>
                    
                    <div style={{fontWeight:500}}>Technique 101</div>
                    <div>Date:</div>
                    <div>Jan. 17, 24,31;</div>
                    <div>Feb. 07, 14, 21, 28;</div>
                    <div>Mar. 06, 13, 20, 27;</div>
                    <div>Time: Wednesdays 7:30-8:25pm</div>
                    <div>Location: Scottish Cultural Centre 8886 Hudson St., Vancouver </div>
                    
                    <div style={{fontWeight:500}}>Competitor Training Class</div>
                    <div>Time: Wednesdays 8:30-10:00pm</div>
                    <div>Location: Scottish Cultural Centre 8886 Hudson St., Vancouver </div>
                    
                    <div style={{fontWeight:500}}>Tuition</div>
                    <div>Please contact us for pricing info</div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div style={{fontWeight:500}}>Registration</div>
                    <div>Please email us directly at tonyandgloria@gmail.com for registration and details, or enroll on Eventbrite for Calgary Intro Class
                        <a target='_blank' rel="noopener noreferrer" style={{textDecoration: "none", color: "black", marginLeft: "8px", fontWeight: "400"}} href="https://www.eventbrite.ca/e/adult-ballroom-dance-classes-tickets-385856315627">
                            HERE
                        </a>
                    </div>
                    <div>*No refunds </div>
                    <div>**All discounts and promotions can not be combined.</div>
                    <div>***We reserve the right to cancel classes with full refund if it does not meet minimum registration requirements or for un-forseen circumstances. </div>
                    <div>​Contact us for more information.</div>
                </div>
            </div>
            <div className='classes-section-special' ref={refEvents}>
                <div className='classes-subtitle-special'>
                    Company Event, Birthday Party, and More
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
            <div className='classes-section-special-2' ref={refInfo}>
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
