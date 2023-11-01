import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  username: '',
  total_cash: 0,
  bets: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signup: (state, action) => {
      const { username, total_cash } = action.payload;
      state.isLoggedIn = true;
      state.username = username;
      state.total_cash = total_cash;
    },
  },
});

export const { signup } = userSlice.actions;

export default userSlice.reducer;
