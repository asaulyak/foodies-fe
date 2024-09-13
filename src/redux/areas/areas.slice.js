import { createSlice } from '@reduxjs/toolkit';
import { fetchAreasList } from './areas.actions.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const areasSlice = createSlice({
  name: 'areas',
  initialState: {
    list: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchAreasList.pending, handlePending)
      .addCase(fetchAreasList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
        state.error = null;
      })
      .addCase(fetchAreasList.rejected, handleRejected);
  },
});

export const areasReducer = areasSlice.reducer;
