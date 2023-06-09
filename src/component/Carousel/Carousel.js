import React, { useState, useEffect } from "react";
import "./Carousel.css";
import arrow from "../../asset/arrow.png";

const Carousel = (props) => {
    const { childrenList } = props;
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
            <div className="carousel-btn" onClick={decreaseIndex}>
                <img className="carousel-img" alt="left-arrow" src={arrow} />
            </div>
            <div className="carousel-slide">
                {childrenList[current]}
            </div>
            <div className="carousel-btn rotate180" onClick={increaseIndex}>
                <img className="carousel-img" alt="right-arrow" src={arrow} />
            </div>
        </div>
    );
};

export default Carousel;