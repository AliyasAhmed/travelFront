// src/apiClient.js
import axios from 'axios';
import { toast } from 'react-toastify';
// We'll assume you have a React context with a logout function or your own approach
// import { AuthContext } from '../context/AppContext';

const apiClient = axios.create({
  baseURL: 'https://api.maizbaan.ai',
});

// Request Interceptor: attach token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Response Interceptor: handle 401
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      toast.error('Your session has expired. Please log in again.');

      // Clear token & user data
      localStorage.removeItem('authToken');
      localStorage.removeItem('UserId');
      localStorage.removeItem('UserNumber');

      // Optionally reset your context or Redux store
      // e.g. store.dispatch(logout());
      // or if you have a function: logout();

      // Optionally redirect
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default apiClient;
