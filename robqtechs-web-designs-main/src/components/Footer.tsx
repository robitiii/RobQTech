import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">RobQTech</span>
              <span className="logo-subtitle">Web</span>
            </div>
            <p className="footer-description">
            Transforming your ideas into powerful, pixel-perfect websites. We craft sleek, responsive designs that don’t just look great — they deliver real results.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/booking">Book Now</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="/services">Basic Website</a></li>
              <li><a href="/services">Moderate Website</a></li>
              <li><a href="/services">Advanced Website</a></li>
              <li><a href="/booking">Custom Solutions</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={16} />
                <span>robitiierady@gmail.com</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>+27 74 654 3765</span>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Cape Town, South Africa</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} RobQTech Web. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
