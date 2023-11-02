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
    },
    getPlayers: (state, action) => {
      state.players = action.payload;
    },
  },
});

export const { getTeams, getPlayers } = teamSlice.actions;

export default teamSlice.reducer;
