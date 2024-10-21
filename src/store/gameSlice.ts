import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { InitialStateType } from './types';

const initialState: InitialStateType = {
  gameStatus: 'settings',
  startMatches: 25,
  firstTurn: 'player',
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
      state.firstTurn = action.payload.firstTurn;
      state.remainingMatches = action.payload.startMatches;
      state.maxTurnPick = action.payload.maxTurnPick;
      state.currentTurn = action.payload.firstTurn;
    },
    playerTurn: (state, action) => {
      state.remainingMatches -= action.payload;
      state.playerMatches += action.payload;
      state.currentTurn = 'computer';
      if (state.remainingMatches <= 0) state.gameStatus = 'finish';
    },
    computerTurn: (state, action) => {
      if (state.currentTurn === 'computer') {
        state.remainingMatches -= action.payload;
        state.computerMatches += action.payload;
        state.currentTurn = 'player';
        if (state.remainingMatches <= 0) state.gameStatus = 'finish';
      }
    },
    finishGame: (state) => {
      state.gameStatus = 'finish';
    },
    restartGame: (state) => {
      state.gameStatus = 'game';
      state.remainingMatches = state.startMatches;
      state.playerMatches = 0;
      state.computerMatches = 0;
      state.currentTurn = state.firstTurn;
    },
    resetSettings: (state) => {
      state.gameStatus = 'settings';
    },
  },
});

export const {
  startGame,
  playerTurn,
  computerTurn,
  finishGame,
  restartGame,
  resetSettings,
} = gameSlice.actions;

export const selectGame = (state: RootState) => state.game;

export default gameSlice.reducer;
