export type InitialStateType = {
  gameStatus: 'settings' | 'game' | 'finish';
  startMatches: number;
  firstTurn: 'player' | 'computer';
  remainingMatches: number;
  maxTurnPick: number;
  playerMatches: number;
  computerMatches: number;
  currentTurn: 'player' | 'computer';
};
