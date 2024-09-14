import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  fetchDetailInfoUser,
  logoutUser,
  patchAvatar,
  addRecipeToFavorites,
  removeRecipeFromFavorites,
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
    isLoading: true,
    userFavoriteRecipes: [],
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload;
        state.userFavoriteRecipes = action.payload.favoriteRecipes;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, handleRejected)
      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, state => {
        state.isLoading = false;
        state.userFavoriteRecipes = [];
        state.info = null;
      })
      .addCase(logoutUser.rejected, handleRejected)
      .addCase(patchAvatar.rejected, handleRejected)
      .addCase(patchAvatar.pending, handlePending)
      .addCase(patchAvatar.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info.avatar = action.payload.avatar;
        state.error = null;
      })
      .addCase(addRecipeToFavorites.rejected, handleRejected)
      .addCase(addRecipeToFavorites.pending, handlePending)
      .addCase(addRecipeToFavorites.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userFavoriteRecipes.push(action.payload);
        state.error = null;
      })
      .addCase(removeRecipeFromFavorites.rejected, handleRejected)
      .addCase(removeRecipeFromFavorites.pending, handlePending)
      .addCase(removeRecipeFromFavorites.fulfilled, (state, action) => {
        const index = state.userFavoriteRecipes.findIndex(
          e => e === action.payload
        );
        state.isLoading = false;
        state.userFavoriteRecipes.splice(index, 1);
        state.error = null;
      });
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
  },
});

export const userReducer = userSlice.reducer;
export const userInfoReducer = userInfoSlice.reducer;
