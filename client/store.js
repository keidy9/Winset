import { configureStore } from '@reduxjs/toolkit';
import userReducer from './state/userSlice';

const store = configureStore({
  reducer: {
    userReducer,
  },
  devTools: true,
});

export default store;
