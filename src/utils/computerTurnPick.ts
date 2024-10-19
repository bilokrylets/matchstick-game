export function computerTurnPick(
  remainingMatches: number,
  computerMatches: number,
  playerMatches: number,
  maxTurnPick: number,
): number {
  //check is it win turn
  if (
    remainingMatches <= maxTurnPick &&
    !((computerMatches + remainingMatches) % 2)
  ) {
    return remainingMatches;
  }

  //  temporal solution
  return Math.floor(Math.random() * maxTurnPick) + 1;
}
