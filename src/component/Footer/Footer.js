import React, {useState} from 'react';
import './Footer.css';
import { Button } from '../Button/Button';
import { subscribe } from '../../service';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = subscribe(email);
        if (res) {
            setEmail('');
        }
    }

    return (
        <div className='footer-container'>
            <div className='footer-quote'>
                <i>"Every time I dance, I become a better version of me”</i>
            </div>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                Join the newsletter, be the first to know about new classes and events!
                </p>
                <div className='input-areas'>
                    <form className='footer-form'>
                        <input
                            className='footer-input'
                            name='EMAIL'
                            type='email'
                            placeholder='Your Email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                        <Button buttonStyle='btn--outline' onClick={handleSubmit}>Subscribe</Button>
                    </form>
                </div>
            </section>
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