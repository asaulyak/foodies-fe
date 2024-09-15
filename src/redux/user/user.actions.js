import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../http/index.js';
import { openModal } from '../modal/modal.slice.js';
import { MODAL_TYPE } from '../../utils/constants.js';

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

export const addRecipeToFavorites = createAsyncThunk(
  'user/addToFavorites',
  async (recipeId, { rejectWithValue, dispatch }) => {
    try {
      const res = await http.post(`/recipes/${recipeId}/favorites`);
      return res.data.recipeId;
    } catch (error) {
      if (error.message.includes(401)) {
        return dispatch(openModal(MODAL_TYPE.signin));
      }
      return rejectWithValue(error.message);
    }
  }
);

export const removeRecipeFromFavorites = createAsyncThunk(
  'user/removeFromFavorites',
  async (recipeId, { rejectWithValue, dispatch }) => {
    try {
      await http.delete(`/recipes/${recipeId}/favorites`);
      return recipeId;
    } catch (error) {
      if (error.message.includes(401)) {
        return dispatch(openModal(MODAL_TYPE.signin));
      }
      return rejectWithValue(error.message);
    }
  }
);
