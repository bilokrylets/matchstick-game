import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  computerTurn,
  finishGame,
  playerTurn,
  selectGame,
} from '../../redux/gameSlice';
import styles from './game.module.scss';

export default function Game() {
  const {
    remainingMatches,
    currentTurn,
    computerMatches,
    playerMatches,
    maxTurnPick,
  } = useSelector(selectGame);
  const dispatch: AppDispatch = useDispatch();

  if (remainingMatches <= 0) dispatch(finishGame());

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
