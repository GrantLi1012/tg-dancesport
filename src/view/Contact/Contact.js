import React, {useState} from 'react';
import './Contact.css';
import { tg9, youtube, facebook } from '../../asset';
import { Button } from '../../component';
import { externalLinks } from '../../config';
import { subscribe } from '../../service';

const Contact = () => {
    const [email, setEmail] = useState('');

    const handleSuscribe = () => {

        const res = subscribe(email);
        if (res) {
            setEmail('');
        }
    };

    return (
        <div className='contact-container'>
            <img alt="tg9" className="contact-title-img"  src={tg9} />
            <div className='contact-section margin-r'>
                <div className='contact-subsection'>
                    <h1>Subscribe to our newsletter!</h1>
                    <input
                        className='contact-input'
                        name='email'
                        type='email'
                        placeholder='Email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                    <Button
                        buttonStyle='btn--outline'
                        buttonSize='btn--medium'
                        onClick={handleSuscribe}
                    >
                        Subscribe
                    </Button>
                </div>
                <div className='contact-subsection'>
                    <h1>Follow us on social media!</h1>
                    <li className='contact-social'>
                        <a href={externalLinks.facebook} target="_blank" rel="noopener noreferrer">
                            <img src={facebook} alt="facebook" className="contact-icon-sm" />
                        </a>
                        <a href={externalLinks.youtube} target='_blank' rel="noopener noreferrer">
                            <img src={youtube} alt="youtube" className="contact-icon-sm" />
                        </a>
                    </li>
                </div>
                <div className='contact-subsection contact-buttons'>
                    <a href={externalLinks.contactForm} target='_blank' rel="noopener noreferrer">
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            
                        >
                            CONTACT US!
                        </Button>
                    </a>
                    <a href={externalLinks.emailTo} target='_blank' rel="noopener noreferrer">
                        <Button
                            buttonStyle='btn--outline'
                            buttonSize='btn--large'
                            
                        >
                            EMAIL US!
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
};

export default Contact;