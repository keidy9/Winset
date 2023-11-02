import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: true, //set to true for dev purposes
  username: '',
  user_id: -1,
  total_cash: 0,
  bets: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signup_login: (state, action) => {
      const { username, total_cash, _id } = action.payload;
      state.isLoggedIn = true;
      state.username = username;
      state.user_id = _id;
      state.total_cash = total_cash;
      console.log(total_cash);
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
      state.username = '';
      state.total_cash = 0;
    },
    addCash: (state, action) => {
      state.total_cash = Number(state.total_cash) + Number(action.payload);
    },
    betRemoveCash: (state, action) => {
      console.log('4214214214',  Number(state.total_cash) - Number(action.payload))
      state.total_cash = Number(state.total_cash) - Number(action.payload);
    },
    placeBet: (state, action) => {
      state.bets = action.payload;
    },
    updateBets: (state, action) => {
      state.bets.forEach((bet, index) => {
        for (let i = 0; i < action.payload.length; i++) {
          console.log('team_betted_on', bet.team_betted_on);
          console.log(action.payload[i].name === bet.team_betted_on);
          if (action.payload[i].name === bet.team_betted_on && !bet.results) {
            let odds = bet.odds;
            if (odds < 0) odds = 100 / Math.abs(odds);
            else odds = odds / 100;
            bet.payout = (
              Number(bet.initial_bet) +
              Number(bet.initial_bet) * odds
            ).toFixed(2);
            state.total_cash += Number(bet.payout);
            bet.total_cash_after_payment = state.total_cash;
            bet.results = 'hit';
          }
        }
      });
      state.bets.forEach((bet) => {
        if (!bet.results) {
          bet.payout = 0;
          bet.results = 'miss';
          bet.total_cash_after_payment = state.total_cash;
        }
      });
    },
  },
});

export const { signup_login, logout, betRemoveCash, placeBet, addCash, updateBets } =
  userSlice.actions;

export default userSlice.reducer;
