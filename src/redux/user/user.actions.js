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

export const fetchDetailInfoUser = createAsyncThunk(
  'user/fetchDetailInfoUser',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await http.get(`${'/users/info/' + id}`);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const patchAvatar = createAsyncThunk(
  'user/patchAvatar',
  async (file, { rejectWithValue }) => {
    try {
      const { data } = await http.patch('/users/avatar/', file, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      await http.post('/users/signout');

      localStorage.removeItem('authToken');

      dispatch({ type: 'user/clearCurrentUser' });
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
