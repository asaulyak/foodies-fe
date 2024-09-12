import { createSelector } from '@reduxjs/toolkit';
export const selectIsLoading = state => state.recipes.isLoading;
export const selectError = state => state.recipes.error;

const selectRecipesState = state => state.recipes;

export const selectIngredients = createSelector(
  [selectRecipesState],
  recipes => recipes.ingredients
);

export const selectAreas = createSelector(
  [selectRecipesState],
  recipes => recipes.areas
);

// export const selectIngredients = state =>
//   state.recipes.ingredients.map(ingredient => ingredient.name);

// export const selectAreas = state => state.recipes.areas.map(area => area.name);
