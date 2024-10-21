import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './playerInput.module.scss';
import { selectGame, playerTurn } from '../../../store/gameSlice';
import { AppDispatch } from '../../../store/store';
import Button from '../../UI/Button/Button';

export default function PlayerInput() {
  const { remainingMatches, maxTurnPick } = useSelector(selectGame);
  const [customPick, setCustomPick] = useState(1);
  const dispatch: AppDispatch = useDispatch();

  const buttons = Array.from(
    { length: Math.min(maxTurnPick, 5) },
    (_, index) => index + 1,
  );

  function handleCustomPick(e: React.ChangeEvent<HTMLInputElement>) {
    const value = +e.target.value;
    if (value > maxTurnPick) {
      setCustomPick(maxTurnPick);
    } else {
      setCustomPick(value);
    }
  }

  const isCustomPick = maxTurnPick > 5 && remainingMatches > 5;

  return (
    <div className={styles.playerInput}>
      <p className={styles.label}>Pick matchsticks:</p>
      <div className={styles.buttonBlock}>
        {buttons.map((value) => (
          <Button
            key={value}
            disabled={remainingMatches < value}
            onClick={() => dispatch(playerTurn(value))}
          >
            {value}
          </Button>
        ))}
      </div>
      {isCustomPick && (
        <div className={styles.customPick}>
          <p className={styles.label}>
            OR add custom amount from 1 to {maxTurnPick}{' '}
          </p>
          <span>
            <input
              className={styles.pickInput}
              type="number"
              value={customPick}
              onChange={(e) => handleCustomPick(e)}
              min={1}
              max={maxTurnPick}
            />
            <Button onClick={() => dispatch(playerTurn(customPick))}>
              Pick
            </Button>
          </span>
        </div>
      )}
    </div>
  );
}
