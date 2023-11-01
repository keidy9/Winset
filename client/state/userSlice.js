import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true, //set to true for dev purposes
  username: '',
  total_cash: 0,
  bets: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signup_login: (state, action) => {
      const { username, total_cash } = action.payload;
      state.isLoggedIn = true;
      state.username = username;
      state.total_cash = total_cash;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.username = '';
      state.total_cash = 0;
    },
  },
});

export const { signup_login, logout } = userSlice.actions;

export default userSlice.reducer;
