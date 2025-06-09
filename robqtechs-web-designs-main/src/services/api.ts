import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://hook.eu2.make.com/s2w5d33gvea87590ys607ss3xpsv133e';

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  description: string;
}

export const submitBookingForm = async (formData: BookingFormData) => {
  try {
    const response = await axios.post(API_BASE_URL, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.data) {
      throw new Error('No response data received from the server');
    }
    
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Booking submission error:', {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        message: error.message
      });
      
      if (error.response?.status === 404) {
        throw new Error('The booking service is currently unavailable. Please try again later.');
      } else if (error.response?.status === 401 || error.response?.status === 403) {
        throw new Error('Authentication failed. Please check your API configuration.');
      } else {
        throw new Error(error.response?.data?.message || 'Failed to submit booking form. Please try again.');
      }
    }
    throw error;
  }
}; 