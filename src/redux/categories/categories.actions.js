import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../http';

export const fetchCategories = createAsyncThunk(
  'fetchCategories',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await http.get('/categories');

      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
