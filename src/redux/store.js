import { configureStore } from '@reduxjs/toolkit';
import { userInfoReducer, userReducer } from './user/user.slice.js';
import { modalReducer } from './modal/modal.slice.js';
import { recipeReducer } from './recipes/recipes.slice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    userInfo: userInfoReducer,
    modal: modalReducer,
    recipes: recipeReducer,
  },
});
