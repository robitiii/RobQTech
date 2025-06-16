import { useState } from 'react';
import { Check, Star, Zap, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

const Services = () => {
  const [activeTab, setActiveTab] = useState('one-time');

  const oneTimePlans = [
    {
      name: 'Basic Website',
      price: 'R749.99',
      popular: false,
      description: 'Perfect for personal brands and small projects',
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
      price: 'R1499.99',
      popular: true,
      description: 'Ideal for small businesses and startups',
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
      price: 'R2999.99',
      popular: false,
      description: 'For established businesses and e-commerce',
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
    }
  ];

  const recurringPlans = [
    {
      name: 'Starter Care',
      price: 'R299.99',
      period: 'per month',
      popular: false,
      description: 'Essential maintenance for small websites',
      features: [
        'Weekly backups',
        'Security monitoring',
        'Basic updates',
        'Performance checks',
        'Email support',
        'Monthly reports',
        'Content updates (up to 5/month)',
        'Plugin updates'
      ]
    },
    {
      name: 'Business Care',
      price: 'R599.99',
      period: 'per month',
      popular: true,
      description: 'Comprehensive care for growing businesses',
      features: [
        'Daily backups',
        'Advanced security monitoring',
        'Priority updates',
        'Performance optimization',
        'Priority support',
        'Weekly reports',
        'Content updates (up to 15/month)',
        'Plugin & theme updates',
        'SEO monitoring',
        'Analytics tracking'
      ]
    },
    {
      name: 'Premium Care',
      price: 'R999.99',
      period: 'per month',
      popular: false,
      description: 'Full-service management for enterprise sites',
      features: [
        'Real-time backups',
        'Enterprise security',
        'Immediate updates',
        'Advanced optimization',
        '24/7 priority support',
        'Daily reports',
        'Unlimited content updates',
        'Full maintenance',
        'Advanced SEO management',
        'Custom feature development',
        'Dedicated account manager'
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
        </div>

        <div className="services-toggle fade-in-up">
          <button 
            className={`toggle-btn ${activeTab === 'one-time' ? 'active' : ''}`}
            onClick={() => setActiveTab('one-time')}
          >
            <Zap size={20} />
            One-Time Builds
          </button>
          <button 
            className={`toggle-btn ${activeTab === 'recurring' ? 'active' : ''}`}
            onClick={() => setActiveTab('recurring')}
          >
            <RefreshCw size={20} />
            Recurring Care
          </button>
        </div>

        {activeTab === 'one-time' ? (
          <>
            <div className="section-header fade-in-up">
              <h2>⚡ One-Time Website Builds</h2>
              <p>Get a professional website built to your specifications</p>
            </div>
            <div className="pricing-grid">
              {oneTimePlans.map((plan, index) => (
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
                    Select Plan
                  </Link>
                </div>
              ))}
            </div>
            <div className="payment-notice fade-in-up">
              <p className="payment-text">
                <strong>25% deposit required to start. Full payment before handover.</strong>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="section-header fade-in-up">
              <h2>🔁 Ongoing Website Management</h2>
              <p>Keep your website running smoothly with our maintenance plans</p>
            </div>
            <div className="pricing-grid">
              {recurringPlans.map((plan, index) => (
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
                    <p className="plan-period">{plan.period}</p>
                    <p className="plan-description">{plan.description}</p>
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
                    Subscribe Now
                  </Link>
                </div>
              ))}
            </div>
            <div className="payment-notice fade-in-up">
              <p className="payment-text">
                <strong>Cancel anytime with 30 days' notice. First month includes R300 setup fee.</strong>
              </p>
            </div>
          </>
        )}

        <div className="services-info">
          <div className="info-grid">
            <div className="info-card fade-in-left">
              <h3>Why Choose RobQTech?</h3>
              <ul>
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
