import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import './style.css';




const Footer = () => {
    return (


        /* SOCIAL LINKS */

        <footer className="footer mt-auto py-3 bg-dark" style={{ position: 'fixed', bottom: '0px'}}>
            <div className="flex-row space-between px-2">
                <span className="footer px-2" style={{ color: 'white' }}>
                    &copy;{(new Date().getFullYear())}
                    {' '}by
                    {' '}<a className="footer px-2" href="https://github.com/Dannyb0o0y" target="_blank" rel="noopener noreferrer" style={{ color: 'white', fontSize: '20px' }}>Daniel Rasi</a>
                </span>
                <span><a className="footer px-2" href="https://github.com/Dannyb0o0y/MERN-Sky-Camp.git" target="_blank" rel="noopener noreferrer">< BsGithub style={{ color: 'white', fontSize: '32px' }} /></a></span>
                
             </div>

        </footer>
    );
};

export default Footer;