import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { InitialStateType } from './types';

const initialState: InitialStateType = {
  gameStatus: 'game',
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
      state.currentTurn = 'computer';
    },
    computerTurn: (state, action) => {
      state.remainingMatches -= action.payload;
      state.computerMatches += action.payload;
      state.currentTurn = 'player';
    },
    finishGame: (state) => {
      state.gameStatus = 'finish';
    },
  },
});

export const { playerTurn, computerTurn, finishGame } = gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
