import { configureStore } from '@reduxjs/toolkit';
import { userInfoReducer, userReducer } from './user/user.slice.js';
import { modalReducer } from './modal/modal.slice.js';
import { categoriesReducer } from './categories/categories.slice.js';
import { ingredientsReducer } from './ingredients/ingredients.slice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    userInfo: userInfoReducer,
    modal: modalReducer,
    categories: categoriesReducer,
    ingredients: ingredientsReducer,
  },
});
