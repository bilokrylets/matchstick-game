import { useSelector, useDispatch } from 'react-redux';
import styles from './game.module.scss';
import { useEffect } from 'react';
import { computerTurnPick } from '../../utils/computerTurnPick';
import GamerCard from '../../components/GamerCard/GamerCard';
import MatchesBunch from '../../components/MatchesBunch/MatchesBunch';
import {
  computerTurn,
  resetSettings,
  restartGame,
  selectGame,
} from '../../store/gameSlice';
import { AppDispatch } from '../../store/store';
import Button from '../../components/UI/Button/Button';

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

    const computerTurnDelay = Math.random() * 1000 + 1000;

    setTimeout(() => {
      const computerPick = computerTurnPick(
        remainingMatches,
        computerMatches,
        playerMatches,
        maxTurnPick,
      );
      dispatch(computerTurn(computerPick));
    }, computerTurnDelay);
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

      <div className={styles.gameOptions}>
        <Button onClick={() => dispatch(restartGame())}>Restart</Button>
        <Button onClick={() => dispatch(resetSettings())}>
          Start with new settings
        </Button>
      </div>
    </div>
  );
}
