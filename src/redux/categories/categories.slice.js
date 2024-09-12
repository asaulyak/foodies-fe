import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoriesList } from './categories.actions.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    list: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategoriesList.pending, handlePending)
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
        state.error = null;
      })
      .addCase(fetchCategoriesList.rejected, handleRejected);
  },
});

export const categoriesReducer = categoriesSlice.reducer;
