import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoriesList } from './categories.actions';

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
      .addCase(fetchCategoriesList.rejected, handleRejected)
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.list = action.payload;
      });
  },
});

export const categoriesReducer = categoriesSlice.reducer;
