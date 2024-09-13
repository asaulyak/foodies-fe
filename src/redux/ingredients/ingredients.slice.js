import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredientsList } from './ingredients.actions.js';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState: {
    list: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchIngredientsList.pending, handlePending)
      .addCase(fetchIngredientsList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
        state.error = null;
      })
      .addCase(fetchIngredientsList.rejected, handleRejected);
  },
});

export const ingredientsReducer = ingredientsSlice.reducer;
