import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { arrow, arrowCircled, arrowCircledWhite } from "../../asset";

const Carousel = (props) => {
    const { childrenList, small = false, whiteBtn=false } = props;
    const [current, setCurrent] = useState(0);
    const length = childrenList ? childrenList.length : 0;

    const increaseIndex = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };

    const decreaseIndex = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    // increase index every 8 seconds automatically
    useEffect(() => {
        const timer = setTimeout(() => {
            increaseIndex();
        }, 8000);
        return () => clearTimeout(timer);
    });
    
    return (
        <div className="carousel-container">
            <div className="carousel-slide">
                {childrenList[current]}
            </div>
            { small ? <div className="carousel-sm-btn">
                    <div className="carousel-sm-btn-wrapper rotate180" onClick={decreaseIndex}>
                        <img className="carousel-img-sm" alt="left-arrow" src={whiteBtn ? arrowCircledWhite : arrowCircled} />
                    </div>
                    <div className="carousel-sm-btn-wrapper" onClick={increaseIndex}>
                        <img className="carousel-img-sm" alt="right-arrow" src={whiteBtn ? arrowCircledWhite : arrowCircled} />
                    </div>
                </div> : 
                <div className="carousel-btns">
                    <div className="carousel-btn-wrapper" onClick={decreaseIndex}>
                        <div className="carousel-btn" onClick={decreaseIndex}>
                            <img className="carousel-img" alt="left-arrow" src={arrow} />
                        </div>
                    </div>
                    <div className="carousel-btn-wrapper rotate180" onClick={increaseIndex}>
                        <div className="carousel-btn" onClick={decreaseIndex}>
                            <img className="carousel-img" alt="right-arrow" src={arrow} />
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Carousel;