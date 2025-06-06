
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1 className="hero-title">
              Professional Web Design
              <br />
              <span className="hero-highlight">That Converts</span>
            </h1>
            <p className="hero-subtitle">
              Transform your business with stunning, responsive websites that captivate 
              your audience and drive results. Expert web design and development services 
              tailored to your unique needs.
            </p>
            <div className="hero-cta">
              <Link to="/booking" className="btn btn-primary hero-btn">
                Book Your Website
                <ArrowRight className="btn-icon" />
              </Link>
              <Link to="/services" className="btn btn-secondary">
                View Services
              </Link>
            </div>
          </div>
          
          <div className="hero-features fade-in-right">
            <div className="feature-card">
              <div className="feature-icon">
                <Code size={32} />
              </div>
              <h3>Clean Code</h3>
              <p>Modern, maintainable code following best practices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Palette size={32} />
              </div>
              <h3>Custom Design</h3>
              <p>Unique designs tailored to your brand identity</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>Fast Performance</h3>
              <p>Optimized for speed and search engine ranking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
