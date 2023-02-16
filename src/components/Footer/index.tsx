import React from 'react';
import LogoApp from '../LogoApp';

const Footer: React.FC = () => {
    return (
        <footer className="footer-app">
            <LogoApp color="#ffffff" variant="footer" />
            <p className="footer-app__text">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;
