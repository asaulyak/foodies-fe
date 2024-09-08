import axios from 'axios';

export const http = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  // baseUTL: 'http://localhost:3030',
  headers: {
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('authToken');

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

//public routes
export const getPopularRecipes = () => http.get('recipes/popular').data;
