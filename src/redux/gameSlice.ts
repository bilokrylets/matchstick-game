import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { InitialStateType } from './types';

const initialState: InitialStateType = {
  remainingMatches: 25,
  maxTurnPick: 3,
  playerMatches: 0,
  computerMatches: 0,
  currentTurn: 'player',
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    playerTurn: (state, action) => {
      state.remainingMatches -= action.payload;
      state.playerMatches += action.payload;
    },
    computerTurn: (state, action) => {
      state.remainingMatches -= action.payload;
      state.computerMatches += action.payload;
    },
  },
});

export const { playerTurn, computerTurn } = gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
