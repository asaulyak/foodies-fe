import axios from 'axios';
// const baseUrl = import.meta.env.VITE_API_BASE_URL;
const baseUrl = 'http://localhost:3030';

console.log(baseUrl);
const instance = axios.create({
  baseUrl: baseUrl,
  headers: {
    accept: 'application/json',
  },
});

export const getPopularRecipes = () => instance.get('api/recipes/popular');

export const getReceiptById = id => instance.get(`/api/recipes/${id}`);
