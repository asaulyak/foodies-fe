import { createSlice } from '@reduxjs/toolkit';
import { fetchCurrentUser } from './user.actions.js';

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
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCurrentUser.pending, handlePending)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload;
        state.error = null;
      })
      .addCase(fetchCurrentUser.rejected, handleRejected);
  },
});

export const userReducer = userSlice.reducer;
