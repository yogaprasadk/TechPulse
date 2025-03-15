
import React from 'react';
import './App.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3 className="footer-heading">Tech Categories</h3>
                    <ul className="footer-list">
                        <li><a href="#">AI & Machine Learning</a></li>
                        <li><a href="#">Cybersecurity</a></li>
                        <li><a href="#">Gadgets</a></li>
                        <li><a href="#">Mobile Tech</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Trending Topics</h3>
                    <ul className="footer-list">
                        <li><a href="#">5G Networks</a></li>
                        <li><a href="#">Quantum Computing</a></li>
                        <li><a href="#">Blockchain</a></li>
                        <li><a href="#">Tech Startups</a></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-heading">Follow Us</h3>
                    <div className="social-links">
                        <a href="#" className="social-icon facebook">Facebook</a>
                        <a href="#" className="social-icon twitter">Twitter</a>
                        <a href="#" className="social-icon instagram">Instagram</a>
                        <a href="#" className="social-icon linkedin">LinkedIn</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© 2025 TechPulse. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
