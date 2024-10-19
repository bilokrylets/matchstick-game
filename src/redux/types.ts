export type InitialStateType = {
  gameStatus: 'settings' | 'game' | 'finish';
  remainingMatches: number;
  maxTurnPick: number;
  playerMatches: number;
  computerMatches: number;
  currentTurn: 'player' | 'computer';
};
