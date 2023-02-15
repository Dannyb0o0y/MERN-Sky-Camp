import React from 'react';
import { BsGithub } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";




const Footer = () => {
                    &copy;{(new Date().getFullYear())}
                    {' '}by
                    {' '}<a className="footer" href="" target="_blank" rel="noopener noreferrer">Daniel Rasi</a>

                </span>
                <span><a className="footer" href="" target="_blank" rel="noopener noreferrer">< FaGithub /> GitHub Repository</a></span>
            </div>
            <div className="footer px-2">
                Photographs courtesy of <a className="footer" href="" target="_blank" rel="noopener noreferrer">Unsplash</a>
            </div>
};

export default Footer;