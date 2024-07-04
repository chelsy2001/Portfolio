import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './styles.scss'; 

const Footer = () => {
    return (
        <footer className='footer'>
            <a href="https://github.com/chelsy2001" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/chelsyyadav/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} />
            </a>
            <h6>ContactNo.</h6>
            <h5>8839761600</h5> <br/>
            <h6>Email : </h6>
            <h5>Chelsyyadav22@gmail.com</h5>
        </footer>
    );
}

export default Footer;
