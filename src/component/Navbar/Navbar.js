import React, {useState} from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

import { logo, square, circle, facebook, youtube } from '../../asset';

import { externalLinks } from '../../config';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => setOpen(!open);
    const closeMobileMenu = () => setOpen(false);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src={logo} alt="logo" className="icon-logo" />
                    </Link>
                    <div className="menu-icon">
                        <img src={open ? circle : square} alt="menu-icon" className="icon" onClick={handleClick} />
                    </div>
                    <ul className={open ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/classes" className="nav-links" onClick={closeMobileMenu}>
                                Classes
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-links" onClick={closeMobileMenu}>
                                Contact
                            </Link>
                        </li>
                        <li className="social-media">
                            <a href={externalLinks.facebook} target="_blank" rel="noopener noreferrer">
                                <img src={facebook} alt="facebook" className="icon-sm" />
                            </a>
                            <a href={externalLinks.youtube} target='_blank' rel="noopener noreferrer">
                                <img src={youtube} alt="youtube" className="icon-sm" />
                            </a>
                            <p className="blog-link">
                                <a href={externalLinks.blog} target='_blank' rel="noopener noreferrer" style={{textDecoration: "none", color: "black"}}>
                                    Blog
                                </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
};

export default Navbar;