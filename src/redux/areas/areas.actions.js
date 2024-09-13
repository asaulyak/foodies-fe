import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../http/index.js';

export const fetchAreasList = createAsyncThunk(
  'areas/fetchAreasList',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await http.get('/areas');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
