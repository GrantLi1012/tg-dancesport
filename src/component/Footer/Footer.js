import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-quote'>
                <i>"Every time I dance, I become a better version of me”</i>
            </div>
            <div className="footer-bottom">
                <div className='website-rights'>© copyright 2023 TGDancesport. All Rights Reserved.</div>
                <div className='website-rights footer-bottom-right'>A quality website made by <a 
                    href="https://grantli.netlify.app/" 
                    className='footer-author'
                    target="_blank" rel="noopener noreferrer" 
                >Grant Li</a></div>
            </div>
        </div>
    );
}

export default Footer;