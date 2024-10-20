import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { computerTurn, selectGame } from '../../redux/gameSlice';
import styles from './game.module.scss';
import { useEffect } from 'react';
import { computerTurnPick } from '../../utils/computerTurnPick';
import FinishScreen from '../FinishScreen/FinishScreen';
import GamerCard from './GamerCard/GamerCard';
import MatchesBunch from '../MatchesBunch/MatchesBunch';

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

    const computerPick = computerTurnPick(
      remainingMatches,
      computerMatches,
      playerMatches,
      maxTurnPick,
    );

    dispatch(computerTurn(computerPick));
  }, [
    computerMatches,
    currentTurn,
    dispatch,
    maxTurnPick,
    playerMatches,
    remainingMatches,
  ]);

  if (remainingMatches <= 0) return <FinishScreen />;

  return (
    <div className={styles.game}>
      <h2 className={styles.title}>
        There is {remainingMatches} matchsticks remaining
      </h2>

      <MatchesBunch matches={remainingMatches} />

      <h4
        className={`${styles.currentTurn} ${
          currentTurn === 'player'
            ? styles.currentTurn_player
            : styles.currentTurn_computer
        }  `}
      >
        {currentTurn} turn
      </h4>

      <div className={styles.players}>
        <GamerCard label="Player 🙍‍♂️" status="player" />

        <GamerCard label="💻 Computer" status="computer" />
      </div>
    </div>
  );
}
