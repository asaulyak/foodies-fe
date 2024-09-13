import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  fetchDetailInfoUser,
  logoutUser,
  patchAvatar,
} from './user.actions.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    info: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    addToFavorites(state, action) {
      state.info.favoriteRecipes.push(action.payload);
    },
    removeFromFavorites(state, action) {
      const index = state.info.favoriteRecipes.findIndex(action.payload);
      state.info.favoriteRecipes.splice(index, 1);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload;

        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, handleRejected)
      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, state => {
        state.isLoading = false;
        state.info = null;
      })
      .addCase(logoutUser.rejected, handleRejected);
  },
});

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState: {
    info: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchDetailInfoUser.rejected, handleRejected)
      .addCase(fetchDetailInfoUser.pending, handlePending)
      .addCase(fetchDetailInfoUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload;
        state.error = null;
      });
    builder
      .addCase(patchAvatar.rejected, handleRejected)
      .addCase(patchAvatar.pending, handlePending)
      .addCase(patchAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info.avatar = action.payload;
        state.error = null;
      });
  },
});
export const userReducer = userSlice.reducer;
export const userInfoReducer = userInfoSlice.reducer;
export const { addToFavorites, removeFromFavorites } = userSlice.actions;
