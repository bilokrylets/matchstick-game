import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { computerTurn, playerTurn, selectGame } from '../../redux/gameSlice';
import styles from './game.module.scss';
import { useEffect } from 'react';
import { computerTurnPick } from '../../utils/computerTurnPick';
import FinishScreen from '../finishScreen/FinishScreen';

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
        <div className={`${currentTurn === 'computer' ? styles.disable : ''}`}>
          <h3>Player 🙍‍♂️</h3>
          <p>matchsticks: {playerMatches}</p>
          <button
            disabled={remainingMatches < 1}
            onClick={() => dispatch(playerTurn(1))}
          >
            1
          </button>
          <button
            disabled={remainingMatches < 2}
            onClick={() => dispatch(playerTurn(2))}
          >
            2
          </button>
          <button
            disabled={remainingMatches < 3}
            onClick={() => dispatch(playerTurn(3))}
          >
            3
          </button>
        </div>

        <div className={`${currentTurn === 'player' ? styles.disable : ''}`}>
          <h3>💻 Computer</h3>
          <p>matchsticks: {computerMatches}</p>
          <button
            disabled={remainingMatches < 1}
            onClick={() => dispatch(computerTurn(1))}
          >
            1
          </button>
          <button
            disabled={remainingMatches < 2}
            onClick={() => dispatch(computerTurn(2))}
          >
            2
          </button>
          <button
            disabled={remainingMatches < 3}
            onClick={() => dispatch(computerTurn(3))}
          >
            3
          </button>
        </div>
      </div>
    </div>
  );
}
