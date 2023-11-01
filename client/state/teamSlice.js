import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  teams: [{}, {}, {}, {}, {}, {}, {}, {}],
  players: [],
};

const teamSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {
    getTeams: (state, action) => {
      state.teams = action.payload;
      console.log(state);
    },
    getPlayers: (state, action) => {
      state.players = action.payload;
      console.log(state);
    },
  },
});

export const { getTeams, getPlayers } = teamSlice.actions;

export default teamSlice.reducer;
