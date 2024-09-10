import { createSlice } from '@reduxjs/toolkit';
import {
  fetchIngredients,
  fetchRecipes,
  fetchRegions,
} from './recipes.actions';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    ingredients: [],
    regions: [],
    recipes: [],
    selectedIngredientIds: [],
    selectedRegionId: '',
    page: 1,
    isLoading: false,
    error: null,
  },
  reducers: {
    setSelectedIngredient: (state, action) => {
      state.selectedIngredientIds = action.payload;
      state.page = 1;
    },
    setSelectedRegion: (state, action) => {
      state.selectedRegionId = action.payload;
      state.page = 1;
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
      })
      .addCase(fetchIngredients.rejected, handleRejected)

      .addCase(fetchRegions.pending, handlePending)
      .addCase(fetchRegions.fulfilled, (state, action) => {
        state.regions = action.payload;
      })
      .addCase(fetchRegions.rejected, handleRejected)
      .addCase(fetchRecipes.pending, handlePending)
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, handleRejected);
  },
});
export const { setSelectedIngredient, setSelectedRegion, setPage } =
  recipesSlice.actions;

export const recipeReducer = recipesSlice.reducer;
