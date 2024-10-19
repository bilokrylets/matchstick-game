import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { computerTurn, selectGame } from '../../redux/gameSlice';
import styles from './game.module.scss';
import { useEffect } from 'react';
import { computerTurnPick } from '../../utils/computerTurnPick';
import FinishScreen from '../finishScreen/FinishScreen';
import GamerCard from './GamerCard';

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
    console.log(computerPick);

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
    <div>
      <h2>There is {remainingMatches} matchsticks remaining</h2>
      <h4>{currentTurn} turn</h4>

      <div className={styles.opponents}>
        <GamerCard label="Player 🙍‍♂️" status="player" />

        <GamerCard label="💻 Computer" status="computer" />
      </div>
    </div>
  );
}
