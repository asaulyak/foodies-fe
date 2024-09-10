import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../http/index.js';

export const fetchIngredients = createAsyncThunk(
  'recipes/fetchIngredients',
  async () => {
    try {
      const response = await http.get('/api/ingredients');
      return response.data;
    } catch (error) {
      return error.message
    }
    
  }
);
export const fetchRegions = createAsyncThunk(
  'recipes/fetchRegions',
  async () => {
    try {
      const response = await http.get('/api/regions');
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async (_, { getState }) => {
    try {
      const state = getState().recipes;
      const { selectedIngredientIds, selectedRegionId, page } = state;

      const params = new URLSearchParams();
      if (selectedRegionId) params.append('areaId', selectedRegionId);
      selectedIngredientIds.forEach(id => params.append('ingredientIds[]', id));

      const response = await http.get(
        `/api/recipes/search?${params.toString()}`
      );
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
