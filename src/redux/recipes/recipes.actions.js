import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../http/index.js';

export const fetchIngredients = createAsyncThunk(
  'recipes/fetchIngredients',
  async (_, thunkAPI) => {
    try {
      const response = await http.get('/api/ingredients');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRegions = createAsyncThunk(
  'recipes/fetchAreas',
  async (_, thunkAPI) => {
    try {
      const response = await http.get('/api/areas');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async ({ category, ingredients, area, limit, page }, thunkAPI) => {
    try {
      const params = new URLSearchParams();
      if (category) params.append('category', category);
      if (ingredients) params.append('ingredients', ingredients);
      if (area) params.append('area', area);
      if (limit) params.append('limit', limit);
      if (page) params.append('page', page);

      const response = await http.get(`/api/recipes/?${params.toString()}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
