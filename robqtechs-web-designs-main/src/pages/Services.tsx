import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
  const plans = [
    {
      name: 'Basic Website',
      price: 'R 500',
      popular: false,
      description: 'Best for influencers and career reflections',
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Free domain and hosting on Vercel',
        'Optional custom domain: minimum R200/year',
        'Basic contact form',
        'Mobile optimization',
        'Basic SEO setup'
      ]
    },
    {
      name: 'Moderate Website',
      price: 'R 800',
      popular: true,
      description: 'Best for small businesses',
      features: [
        'Up to 10 pages',
        'Custom design',
        'Advanced contact forms',
        'Mobile optimization',
        'SEO optimization',
        'Smooth animations',
        'Google Analytics setup',
        'Social media integration',
        'Content management'
      ]
    },
    {
      name: 'Advanced Website',
      price: 'R 1,600',
      popular: false,
      description: 'Best for big businesses',
      features: [
        '20+ pages',
        'Premium custom design',
        'E-commerce functionality',
        'Advanced animations',
        'Premium SEO package',
        'Database integration',
        'Performance optimization',
        'Security features',
        'Advanced analytics',
        'Custom integrations',
        'Priority support'
      ]
    },
    {
      name: 'Website Modification Service',
      price: 'Price Varies',
      popular: false,
      description: 'For clients who already have a website',
      features: [
        'Design changes and improvements',
        'Content updates and management',
        'Layout improvements',
        'Performance optimization',
        'Bug fixes and maintenance',
        'Feature additions',
        'SEO improvements',
        'Mobile responsiveness fixes',
        'Quote provided after consultation'
      ]
    }
  ];

  return (
    <div className="services">
      <div className="container">
        <div className="services-header text-center">
          <h1 className="fade-in-up">Our Services</h1>
          <p className="services-subtitle fade-in-up">
            Choose the perfect package for your business needs. All packages include 
            responsive design, professional development, and ongoing support.
          </p>
          
          <div className="payment-notice fade-in-up">
            <p className="payment-text">
              <strong>A 25% deposit is required for all services before proceeding.</strong>
            </p>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`pricing-card fade-in-up ${plan.popular ? 'popular' : ''}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Star size={16} />
                  Most Popular
                </div>
              )}
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-price">{plan.price}</div>
                <p className="plan-period">{plan.description}</p>
              </div>

              <div className="plan-features">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="feature-item">
                    <Check size={16} className="feature-check" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/booking" 
                className={`btn ${plan.popular ? 'btn-primary' : 'btn-secondary'} plan-cta`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        <div className="services-info">
          <div className="info-grid">
            <div className="info-card fade-in-left">
              <h3>Why Choose RobQTech?</h3>
              <ul>
                <li>✓ 5+ years of web development experience</li>
                <li>✓ Modern, cutting-edge technologies</li>
                <li>✓ 100% client satisfaction guarantee</li>
                <li>✓ Fast turnaround times</li>
                <li>✓ Ongoing support and maintenance</li>
              </ul>
            </div>
            
            <div className="info-card fade-in-right">
              <h3>What's Included</h3>
              <ul>
                <li>✓ Professional design consultation</li>
                <li>✓ Custom development from scratch</li>
                <li>✓ Cross-browser compatibility testing</li>
                <li>✓ Mobile-first responsive design</li>
                <li>✓ Search engine optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
