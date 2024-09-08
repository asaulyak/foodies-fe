import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../http/index.js';

export const fetchCurrentUser = createAsyncThunk(
  'user/fetchCurrentUser',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await http.get('/users/current');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
