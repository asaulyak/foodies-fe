import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './user/user.slice.js';
import { modalReducer } from './modal/modal.slice.js';

export const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
  },
});
