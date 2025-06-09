import { useState } from 'react';
import { toast } from 'sonner';
import { submitBookingForm, type BookingFormData } from '../services/api';
import '../styles/Booking.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
}

const Booking = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const packages = [
    {
      name: 'Basic Website',
      price: 'NOW R499.99',
      features: [
        'Up to 5 pages',
        'Best for influencers and career reflections',
        'Free domain and hosting on Vercel',
        'Optional custom domain: minimum R200/year'
      ]
    },
    {
      name: 'Moderate Website',
      price: 'R1499.99',
      features: [
        'Up to 10 pages',
        'Best for small businesses',
        'Advanced animations',
        'CMS integration',
        'Advanced SEO'
      ]
    },
    {
      name: 'Advanced Website',
      price: 'R2999.99',
      features: [
        '20+ pages',
        'Best for big businesses',
        'E-commerce functionality',
        'Custom features',
        'Performance optimization'
      ]
    },
    {
      name: 'Website Modification',
      price: 'Price Varies',
      features: [
        'For clients who already have a website',
        'Design changes and improvements',
        'Content updates',
        'Quote provided after consultation'
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

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a package';
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
          projectType: '',
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

  return (
    <div className="booking">
      <div className="container">
        <div className="booking-header">
          <h1 className="fade-in-up">Book Your Website</h1>
          <p className="booking-subtitle fade-in-up">
            Ready to bring your vision to life? Choose your package and let's get started!
          </p>
          
          <div className="payment-notice fade-in-up">
            <p className="payment-text">
              <strong>A 25% deposit is required for all services before proceeding.</strong>
            </p>
          </div>
        </div>

        <div className="booking-content">
          <div className="packages-section fade-in-up">
            <h2>Choose Your Package</h2>
            <div className="packages-grid">
              {packages.map((pkg, index) => (
                <div 
                  key={pkg.name} 
                  className={`package-card ${formData.projectType === pkg.name ? 'selected' : ''}`}
                  onClick={() => setFormData(prev => ({ ...prev, projectType: pkg.name }))}
                >
                  <h3>{pkg.name}</h3>
                  <div className="package-price">{pkg.price}</div>
                  <ul className="package-features">
                    {pkg.features.map((feature, idx) => (
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
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="projectType">Selected Package *</label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={errors.projectType ? 'error' : ''}
                >
                  <option value="">Select a package</option>
                  {packages.map(pkg => (
                    <option key={pkg.name} value={pkg.name}>{pkg.name}</option>
                  ))}
                </select>
                {errors.projectType && <span className="error-message">{errors.projectType}</span>}
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

              <button 
                type="submit" 
                className="btn btn-primary submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
