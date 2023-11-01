import { configureStore } from '@reduxjs/toolkit';
import userReducer from './state/userSlice';
import teamReducer from './state/teamSlice';

const store = configureStore({
  reducer: {
    userReducer,
    teamReducer,
  },
  devTools: true,
});

export default store;
