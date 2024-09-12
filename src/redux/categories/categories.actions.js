import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../http/index.js';

export const fetchCategoriesList = createAsyncThunk(
  'categories/fetchCategoriesList',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await http.get('/categories');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
