import { FormEvent, useState } from 'react';
import styles from './settingScreen.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { startGame } from '../../redux/gameSlice';

export default function SettingScreen() {
  const dispatch: AppDispatch = useDispatch();

  const [startMatches, setStartMatches] = useState(25);
  const [maxMatchPerTurn, setMaxMatchPerTurn] = useState(3);
  const [firstTurn, setFirstTurn] = useState('player');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      startGame({
        startMatches: startMatches,
        maxTurnPick: maxMatchPerTurn,
        currentTurn: firstTurn,
      }),
    );
  }

  const maxPickRange = Math.ceil(startMatches / 2) - 1;

  function changeStartMatches(e) {
    setStartMatches(e.target.value);

    if (maxMatchPerTurn > maxPickRange) setMaxMatchPerTurn(maxPickRange);
  }

  return (
    <div>
      <h2>Matchstick game settings:</h2>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <div className={styles.form__block}>
          <label>Start with {startMatches} matches </label>
          <input
            type="range"
            value={startMatches}
            min={3}
            max={51}
            onChange={(e) => changeStartMatches(e)}
          />
        </div>
        <div className={styles.form__block}>
          <label>Max matches pick per turn: {maxMatchPerTurn}</label>
          <input
            type="range"
            value={maxMatchPerTurn}
            min={1}
            max={maxPickRange}
            onChange={(e) => setMaxMatchPerTurn(+e.target.value)}
          />
        </div>
        <div className={styles.form__block}>
          <label> Who plays first?</label>
          <select
            value={firstTurn}
            onChange={(e) => setFirstTurn(e.target.value)}
          >
            <option value="player">Player</option>
            <option value="computer">Computer</option>
          </select>
        </div>
        <button type="submit">Start game!</button>
      </form>
    </div>
  );
}
