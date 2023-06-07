import React, {useState} from 'react';
import './Footer.css';
import { Button } from '../Button/Button';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        console.log("email: " + email);
        console.log("email subscription not implemented yet");
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
                        name='email'
                        type='email'
                        placeholder='Your Email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <Button buttonStyle='btn--outline' onClick={handleSubmit}>Subscribe</Button>
                </form>
                </div>
            </section>
            
            <small class='website-rights'>© copyright 2023 TGDancesport. All Rights Reserved.</small>
        </div>
    );
}

export default Footer;