import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap, RefreshCw } from 'lucide-react';
import '../styles/Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-text">RobQTech</span>
              <span className="logo-subtitle">Web Designs</span>
            </div>
            <p className="footer-description">
              Transforming your ideas into powerful, pixel-perfect websites. We craft sleek, responsive designs that don't just look great — they deliver real results.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" onClick={scrollToTop}>Home</Link></li>
              <li><Link to="/services" onClick={scrollToTop}>Services</Link></li>
              <li><Link to="/booking" onClick={scrollToTop}>Book Now</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>One-Time Builds</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services#basic" onClick={scrollToTop}>
                  <Zap size={16} />
                  Basic Website
                </Link>
              </li>
              <li>
                <Link to="/services#moderate" onClick={scrollToTop}>
                  <Zap size={16} />
                  Moderate Website
                </Link>
              </li>
              <li>
                <Link to="/services#advanced" onClick={scrollToTop}>
                  <Zap size={16} />
                  Advanced Website
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Recurring Care</h4>
            <ul className="footer-links">
              <li>
                <Link to="/services#starter" onClick={scrollToTop}>
                  <RefreshCw size={16} />
                  Starter Care
                </Link>
              </li>
              <li>
                <Link to="/services#business" onClick={scrollToTop}>
                  <RefreshCw size={16} />
                  Business Care
                </Link>
              </li>
              <li>
                <Link to="/services#premium" onClick={scrollToTop}>
                  <RefreshCw size={16} />
                  Premium Care
                </Link>
              </li>
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
                <span>+27 67 757 6413</span>
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
            <a href="#" onClick={scrollToTop}>Privacy Policy</a>
            <a href="#" onClick={scrollToTop}>Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
