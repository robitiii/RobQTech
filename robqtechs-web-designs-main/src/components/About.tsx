import { Award, Users, Clock, Star } from 'lucide-react';
import '../styles/About.css';

const About = () => {
  const stats = [
    { icon: <Users size={24} />, number: '50+', label: 'Happy Clients' },
    { icon: <Clock size={24} />, number: '24/7', label: 'Support' }
  ];

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text fade-in-left">
            <h2>About RobQTech Web</h2>
            <p className="about-intro">
              Passionate about creating digital experiences that make a difference. 
              With years of expertise in web design and development, I help businesses 
              establish a powerful online presence that drives growth and success.
            </p>
            <div className="about-mission">
              <h3>Our Mission</h3>
              <p>
                To deliver exceptional web solutions that combine stunning design 
                with powerful functionality. Every project is crafted with attention 
                to detail, ensuring your website not only looks amazing but performs 
                flawlessly across all devices.
              </p>
            </div>
            <div className="about-approach">
              <h3>Our Approach</h3>
              <ul>
                <li>✓ Client-focused design process</li>
                <li>✓ Modern, responsive development</li>
                <li>✓ SEO optimization from the ground up</li>
                <li>✓ Ongoing support and maintenance</li>
              </ul>
            </div>
          </div>
          
          <div className="about-stats fade-in-right">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon">
                    {stat.icon}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
