
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import '../styles/SocialMedia.css';

const SocialMedia = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={24} />,
      url: 'https://www.instagram.com/robqtech',
      color: '#e4405f'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={24} />,
      url: '#',
      color: '#0077b5'
    },
  ];

  return (
    <section className="social-media">
      <div className="container">
        <div className="social-content text-center">
          <h2 className="fade-in-up">Connect With Me</h2>
          <p className="social-subtitle fade-in-up">
            Follow my journey and stay updated with the latest web design trends, 
            tips, and project showcases across my social media platforms.
          </p>
          
          <div className="social-links fade-in-up">
            {socialLinks.map((social, index) => (
              <a
                key={social.name}
                href={social.url}
                className="social-link"
                aria-label={`Follow me on ${social.name}`}
                style={{ animationDelay: `${index * 0.1}s`, '--social-color': social.color } as React.CSSProperties}
              >
                <div className="social-icon">
                  {social.icon}
                </div>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
          
          <div className="social-cta fade-in-up">
            <p>Ready to get started on your project?</p>
            <a href="/booking" className="btn btn-primary">
              Book Your Website Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
