import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth.slice'
import postReducer from './posts.slice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    post: postReducer,
  },
});
