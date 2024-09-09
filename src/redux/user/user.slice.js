import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCurrentUser,
  fetchDetailInfoUser,
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
    info: {
      name: '',
      email: '',
      avatar: '',
      totalFavoritesRecipes: 0,
      totalFollowers: 0,
      totalFollowings: 0,
      totalRecipes: 0,
    },
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        console.log(action.payload);

        state.isLoading = false;
        state.info.name = action.payload.name;
        state.info.email = action.payload.email;
        state.info.avatar = action.payload.avatar;

        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, handleRejected);

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
        console.log(action.payload);

        state.isLoading = false;
        state.info.avatar = action.payload;
        state.error = null;
      });
  },
});

export const userReducer = userSlice.reducer;
