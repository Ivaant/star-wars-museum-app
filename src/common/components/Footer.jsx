import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            Copyright © {currentYear}
        </footer>
    );
}

export default Footer;