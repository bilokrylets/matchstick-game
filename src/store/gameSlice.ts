import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { InitialStateType } from './types';

const initialState: InitialStateType = {
  gameStatus: 'settings',
  startMatches: 25,
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
    startGame: (state, action) => {
      state.gameStatus = 'game';
      state.startMatches = action.payload.startMatches;
      state.remainingMatches = action.payload.startMatches;
      state.maxTurnPick = action.payload.maxTurnPick;
      state.currentTurn = action.payload.currentTurn;
    },
    playerTurn: (state, action) => {
      state.remainingMatches -= action.payload;
      state.playerMatches += action.payload;
      state.currentTurn = 'computer';
      if (state.remainingMatches <= 0) state.gameStatus = 'finish';
    },
    computerTurn: (state, action) => {
      state.remainingMatches -= action.payload;
      state.computerMatches += action.payload;
      state.currentTurn = 'player';
      if (state.remainingMatches <= 0) state.gameStatus = 'finish';
    },
    finishGame: (state) => {
      state.gameStatus = 'finish';
    },
  },
});

export const { startGame, playerTurn, computerTurn, finishGame } =
  gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
