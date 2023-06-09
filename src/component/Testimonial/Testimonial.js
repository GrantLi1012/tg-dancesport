import React from "react";
import "./Testimonial.css";

import quote from "../../asset/quote.png";

const Testimonial = (props) => {
    const {author = "Anonymous", testimonial = ""} = props;

    return (
        <div className="testimonial-container">
            <div className="testimonial-quote">
                <img className="testimonial-img" alt="quote-left" src={quote} />
            </div>
            <div className="testimonial-content">
                <div className="testimonial-text">
                    {testimonial}
                </div>
                <div className="testimonial-author">
                    {"- " + author}
                </div>
            </div>
            <div className="testimonial-quote">
                <img className="testimonial-img rotate180" alt="quote-left" src={quote} />
            </div>
        </div>
    );
};

export default Testimonial;