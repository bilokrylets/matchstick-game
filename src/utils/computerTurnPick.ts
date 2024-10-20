// to setup winning turn u need to leave your opponent with (maxTurnPick + 2) matches

export function computerTurnPick(
  remainingMatches: number,
  computerMatches: number,

  maxTurnPick: number,
): number {
  // no choice
  if (remainingMatches === 1) return 1;

  const maxPossiblePick = Math.min(remainingMatches, maxTurnPick);

  if (maxPossiblePick === 1) return 1;

  //check is it win turn
  const isWiningTurn = remainingMatches <= maxTurnPick + 1;

  // pick all and win or left player with 1 match and win
  if (isWiningTurn) {
    if (!((computerMatches + maxPossiblePick) % 2)) {
      return maxPossiblePick;
    } else if (remainingMatches === maxTurnPick + 1) {
      return 1;
    } else {
      return maxPossiblePick - 1;
    }
  }

  const winingTurnSetupZone = maxTurnPick * 2 + 2;

  //setup wining turn (left opponent with (maxTurnPick + 2) matches)
  if (remainingMatches <= winingTurnSetupZone) {
    return Math.max(Math.abs(maxTurnPick + 2 - remainingMatches), 1);
  }

  // check if player can setup win
  if (remainingMatches - maxTurnPick < winingTurnSetupZone) {
    return remainingMatches - winingTurnSetupZone + 1;
  }

  //usual move,no win or win setup possible
  return Math.floor(Math.random() * maxPossiblePick) + 1;
}
