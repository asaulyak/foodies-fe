import { createSelector } from '@reduxjs/toolkit';
export const selectIsLoading = state => state.recipes.isLoading;
export const selectError = state => state.recipes.error;

export const selectRecipesState = state => state.recipes;

export const selectIngredients = createSelector(
  [selectRecipesState],
  recipes => recipes.ingredients
);

export const selectAreas = createSelector(
  [selectRecipesState],
  recipes => recipes.areas
);

export const selectSelectedIngredientId = state =>
  state.recipes.selectedIngredientIds;

export const selectSelectedAreaId = state => state.recipes.selectedAreaId;
