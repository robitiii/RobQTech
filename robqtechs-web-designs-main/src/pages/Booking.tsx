import { useState } from 'react';
import { toast } from 'sonner';
import { submitBookingForm, type BookingFormData } from '../services/api';
import { Zap, RefreshCw, Calendar, Building2, Star } from 'lucide-react';
import '../styles/Booking.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  serviceCategory: 'one-time' | 'recurring';
  serviceType: string;
  startDate: string;
  description: string;
}

const Booking = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    serviceCategory: 'one-time',
    serviceType: '',
    startDate: '',
    description: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const oneTimePlans = [
    {
      name: 'Basic Website',
      price: 'R499.99',
      description: 'Perfect for personal brands and small projects',
      popular: true,
      features: [
        'Up to 5 pages',
        'Responsive design',
        'Basic SEO optimization',
        'Contact form',
        'Free domain and hosting on Vercel'
      ]
    },
    {
      name: 'Moderate Website',
      price: 'R1499.99',
      description: 'Ideal for growing businesses',
      popular: false,
      features: [
        'Up to 10 pages',
        'Advanced animations',
        'CMS integration',
        'Advanced SEO',
        'Custom features'
      ]
    },
    {
      name: 'Advanced Website',
      price: 'R2999.99',
      description: 'For established businesses',
      popular: false,
      features: [
        '20+ pages',
        'E-commerce functionality',
        'Custom features',
        'Performance optimization',
        'Priority support'
      ]
    }
  ];

  const recurringPlans = [
    {
      name: 'Starter Care',
      price: 'R299/month',
      description: 'Basic maintenance and support',
      popular: true,
      features: [
        'Weekly backups',
        'Security updates',
        'Basic content updates',
        'Email support',
        'Performance monitoring'
      ]
    },
    {
      name: 'Business Care',
      price: 'R599/month',
      description: 'Comprehensive website management',
      popular: false,
      features: [
        'Daily backups',
        'Priority security updates',
        'Unlimited content updates',
        'Priority support',
        'Advanced analytics'
      ]
    },
    {
      name: 'Premium Care',
      price: 'R999/month',
      description: 'Full-service website management',
      popular: false,
      features: [
        'Real-time backups',
        '24/7 security monitoring',
        'Unlimited changes',
        'Dedicated support',
        'Custom development'
      ]
    }
  ];

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Please select a service';
    }

    if (!formData.startDate) {
      newErrors.startDate = 'Please select a start date';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Project description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        setIsSubmitting(true);
        await submitBookingForm(formData);
        
        toast.success('Booking Request Submitted!', {
          description: 'Thank you for your booking request! I will get back to you soon.',
          duration: 5000,
          className: 'booking-toast',
          position: 'top-center',
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          serviceCategory: 'one-time',
          serviceType: '',
          startDate: '',
          description: ''
        });
        setErrors({});
      } catch (error) {
        toast.error('Submission Failed', {
          description: error instanceof Error ? error.message : 'Failed to submit booking request. Please try again.',
          duration: 5000,
          className: 'booking-toast',
          position: 'top-center',
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleCategoryChange = (category: 'one-time' | 'recurring') => {
    setFormData(prev => ({
      ...prev,
      serviceCategory: category,
      serviceType: '' // Reset service type when category changes
    }));
  };

  const selectedPlans = formData.serviceCategory === 'one-time' ? oneTimePlans : recurringPlans;

  return (
    <div className="booking">
      <div className="container">
        <div className="booking-header">
          <h1 className="fade-in-up">Book Your Service</h1>
          <p className="booking-subtitle fade-in-up">
            Choose your service category and let's get started on your project!
          </p>
        </div>

        <div className="booking-content">
          <div className="service-category-toggle fade-in-up">
            <button
              className={`toggle-btn ${formData.serviceCategory === 'one-time' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('one-time')}
            >
              <Zap size={20} />
              One-Time Builds
            </button>
            <button
              className={`toggle-btn ${formData.serviceCategory === 'recurring' ? 'active' : ''}`}
              onClick={() => handleCategoryChange('recurring')}
            >
              <RefreshCw size={20} />
              Recurring Care
            </button>
          </div>

          <div className="packages-section fade-in-up">
            <h2>Available {formData.serviceCategory === 'one-time' ? 'Build' : 'Care'} Plans</h2>
            <div className="packages-grid">
              {selectedPlans.map((plan, index) => (
                <div 
                  key={plan.name} 
                  className={`package-card ${formData.serviceType === plan.name ? 'selected' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, serviceType: plan.name }))}
                >
                  {plan.popular && (
                    <div className="popular-badge">
                      <Star size={16} />
                      Most Popular
                    </div>
                  )}
                  <h3>{plan.name}</h3>
                  <div className="package-price">{plan.price}</div>
                  <p className="package-description">{plan.description}</p>
                  <ul className="package-features">
                    {plan.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="booking-form-section fade-in-up">
            <h2>Project Details</h2>
            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder="Enter your full name"
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder="Enter your email address"
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder="Enter your phone number"
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="businessName">
                  <Building2 size={16} />
                  Business/Brand Name (Optional)
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business or brand name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="serviceType">Selected Service *</label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className={errors.serviceType ? 'error' : ''}
                >
                  <option value="">Select a service</option>
                  {selectedPlans.map(plan => (
                    <option key={plan.name} value={plan.name}>
                      {plan.name} - {plan.price}
                    </option>
                  ))}
                </select>
                {errors.serviceType && <span className="error-message">{errors.serviceType}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="startDate">
                  <Calendar size={16} />
                  Preferred Start Date *
                </label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className={errors.startDate ? 'error' : ''}
                  min={new Date().toISOString().split('T')[0]}
                />
                {errors.startDate && <span className="error-message">{errors.startDate}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="description">Project Description *</label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, and any specific requirements..."
                  className={errors.description ? 'error' : ''}
                ></textarea>
                {errors.description && <span className="error-message">{errors.description}</span>}
              </div>

              <div className="payment-notice">
                <p className="payment-text">
                  {formData.serviceCategory === 'one-time' ? (
                    <strong>A 25% deposit is required to start. Full payment before handover.</strong>
                  ) : (
                    <strong>R300 setup fee required. Monthly billing starts after setup.</strong>
                  )}
                </p>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Confirm Booking'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
