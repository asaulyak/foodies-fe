import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../http/index.js';

export const fetchIngredients = createAsyncThunk(
  'recipes/fetchIngredients',
  async (_, thunkAPI) => {
    try {
      const response = await http.get('/ingredients');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAreas = createAsyncThunk(
  'recipes/fetchAreas',
  async (_, thunkAPI) => {
    try {
      const response = await http.get('/areas');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (data, thunkApi) => {
    try {
      const params = new URLSearchParams();
      const response = await http.get('/recipes/search', data);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
// async ({ category, area, ingredients, limit, page }, thunkAPI) => {
//   try {
//     const params = new URLSearchParams();

//     if (category) params.append('categoryId', category);
//     if (area) params.append('areaId', area);
//     if (ingredients && Array.isArray(ingredients)) {
//       ingredients.forEach(id => params.append('ingredientIds[]', id));
//     }
//     if (limit) params.append('limit', limit);
//     if (page) params.append('page', page);

//       const response = await http.get(`/recipes/search?${params.toString()}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
