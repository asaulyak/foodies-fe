import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredients, fetchRecipes, fetchAreas } from './recipes.actions';

const handlePending = state => {
  state.isLoading = true;
  state.isError = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    category: '',
    ingredients: [],
    areas: [],
    recipes: [],
    selectedIngredientIds: '',
    selectedAreaId: '',
    page: 1,
    limit: 12,
    isLoading: false,
    error: null,
  },
  reducers: {
    setSelectedIngredient: (state, action) => {
      state.selectedIngredientIds = action.payload;
    },
    setSelectedArea: (state, action) => {
      state.selectedAreaId = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchIngredients.pending, handlePending)
      .addCase(fetchIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchIngredients.rejected, handleRejected)
      .addCase(fetchAreas.pending, handlePending)
      .addCase(fetchAreas.fulfilled, (state, action) => {
        state.areas = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchAreas.rejected, handleRejected)
      .addCase(fetchRecipes.pending, handlePending)
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchRecipes.rejected, handleRejected);
  },
});

export const { setSelectedIngredient, setSelectedArea, setPage } =
  recipesSlice.actions;

export const recipeReducer = recipesSlice.reducer;
