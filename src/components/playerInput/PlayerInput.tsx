import { useDispatch, useSelector } from 'react-redux';
import { playerTurn, selectGame } from '../../redux/gameSlice';
import { AppDispatch } from '../../redux/store';
import { useState } from 'react';
import Button from '../UI/Button/Button';

export default function PlayerInput() {
  const { remainingMatches, maxTurnPick } = useSelector(selectGame);
  const [customPick, setCustomPick] = useState(1);
  const dispatch: AppDispatch = useDispatch();

  const buttons = Array.from(
    { length: Math.min(maxTurnPick, 5) },
    (_, index) => index + 1,
  );

  const isCustomPick = maxTurnPick > 5 && remainingMatches > 5;

  return (
    <div>
      {buttons.map((value) => (
        <Button
          key={value}
          disabled={remainingMatches < value}
          onClick={() => dispatch(playerTurn(value))}
        >
          {value}
        </Button>
      ))}
      {isCustomPick && (
        <>
          <p>add custom amount from 1 to {maxTurnPick} </p>
          <input
            type="number"
            value={customPick}
            onChange={(e) => setCustomPick(+e.target.value)}
            min={1}
            max={maxTurnPick}
          />
          <button onClick={() => dispatch(playerTurn(customPick))}>pick</button>
        </>
      )}
    </div>
  );
}
