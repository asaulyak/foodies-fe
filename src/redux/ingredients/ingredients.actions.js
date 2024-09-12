import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../http/index.js';

export const fetchIngredientsList = createAsyncThunk(
  'ingredients/fetchIngredientsList',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await http.get('/ingredients');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
