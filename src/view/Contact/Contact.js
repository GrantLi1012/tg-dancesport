import React, {useState} from 'react';
import './Contact.css';
import { tg9, youtube, facebook } from '../../asset';
import { Button } from '../../component';
import { externalLinks } from '../../config';
import { subscribe } from '../../service';

const Contact = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [name, setName] = useState('');
    const [email2, setEmail2] = useState('');
    const [wantSubscribe, setSubscribe] = useState(false);

    const handleSubmit = () => {
        if (!email || !message || !name) {
            alert("Please fill out name, email, and message fields to send a message");
            return;
        }

        if (wantSubscribe) {
            subscribe(email);
        }
    };

    const handleSuscribe = () => {
        subscribe(email2);
    };

    return (
        <div className='contact-container'>
            <img alt="tg9" className="contact-title-img"  src={tg9} />
            <div className='contact-section margin-l'>
                <h1>Contact Us!</h1>
                <input
                    className='contact-input'
                    name='text'
                    type='text'
                    placeholder='Name'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    className='contact-input'
                    name='email'
                    type='email'
                    placeholder='Email'
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <textarea
                    className='contact-textarea'
                    name='message'
                    type='text'
                    placeholder='Message'
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                />
                <div style={{flexDirection:"row", color: "white", margin: "0 0 15px 0"}}>
                    <input
                        className="contact-checkbox"
                        type="checkbox"
                        id="subscribe"
                        name="subscribe"
                        value="subscribe"
                        onChange={() => setSubscribe(!wantSubscribe)}
                    />
                    <label for="subscribe">I agree to receiving marketing and promotional materials</label>
                </div>
                <Button
                    className='contact-button'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </div>
            <div className='contact-section margin-r'>
                <div className='contact-subsection'>
                    <h1>Subscribe to our newsletter!</h1>
                    <input
                        className='contact-input'
                        name='email2'
                        type='email'
                        placeholder='Email'
                        onChange={(e) => setEmail2(e.target.value)}
                        value={email2}
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
                <div className='contact-subsection contact-button'>
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