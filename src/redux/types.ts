export type InitialStateType = {
  gameStatus: 'game' | 'finish';
  remainingMatches: number;
  maxTurnPick: number;
  playerMatches: number;
  computerMatches: number;
  currentTurn: 'player' | 'computer';
};
