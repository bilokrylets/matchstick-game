import { useSelector, useDispatch } from 'react-redux';
import styles from './game.module.scss';
import { useEffect } from 'react';
import { computerTurnPick } from '../../utils/computerTurnPick';
import GamerCard from '../../components/GamerCard/GamerCard';
import MatchesBunch from '../../components/MatchesBunch/MatchesBunch';
import { computerTurn, selectGame } from '../../store/gameSlice';
import { AppDispatch } from '../../store/store';

export default function Game() {
  const {
    remainingMatches,
    currentTurn,
    computerMatches,
    playerMatches,
    maxTurnPick,
  } = useSelector(selectGame);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    if (currentTurn === 'player') return;

    setTimeout(() => {
      const computerPick = computerTurnPick(
        remainingMatches,
        computerMatches,
        playerMatches,
        maxTurnPick,
      );
      dispatch(computerTurn(computerPick));
    }, 1000);
  }, [
    computerMatches,
    currentTurn,
    dispatch,
    maxTurnPick,
    playerMatches,
    remainingMatches,
  ]);

  return (
    <div className={styles.game}>
      <h2 className={styles.title}>
        There is {remainingMatches} matches remaining
      </h2>

      <MatchesBunch matches={remainingMatches} />

      <h4 className={styles.currentTurn}>{currentTurn} turn</h4>

      <div className={styles.players}>
        <GamerCard label="Player 🙍‍♂️" status="player" />
        <GamerCard label="💻 Computer" status="computer" />
      </div>
    </div>
  );
}
