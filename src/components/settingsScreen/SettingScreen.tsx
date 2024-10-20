import { FormEvent, useState } from 'react';
import styles from './settingScreen.module.scss';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { startGame } from '../../redux/gameSlice';
import RangeInput from '../UI/RangeInput/RangeInput';
import Select from '../UI/Select/Select';
import Button from '../UI/Button/Button';

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

  function HandleStartMatches(e: React.ChangeEvent<HTMLInputElement>) {
    const matchNumber =
      +e.target.value % 2 ? +e.target.value : +e.target.value + 1;
    setStartMatches(matchNumber);

    if (maxMatchPerTurn > maxPickRange) setMaxMatchPerTurn(maxPickRange);
  }

  return (
    <div className={styles.settingScreen}>
      <h3 className={styles.title}>Choose your game settings:</h3>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <RangeInput
          value={startMatches}
          min={3}
          max={99}
          onChange={(e) => HandleStartMatches(e)}
        >
          Start with {String(startMatches)} matches
        </RangeInput>

        <RangeInput
          value={maxMatchPerTurn}
          min={1}
          max={maxPickRange}
          onChange={(e) => setMaxMatchPerTurn(+e.target.value)}
        >
          Max matches pick per turn: {maxMatchPerTurn.toString()}
        </RangeInput>

        <Select
          label={'Who plays first?'}
          value={firstTurn}
          onChange={(e) => setFirstTurn(e.target.value)}
          options={[
            { value: 'player', label: 'Player 🙍‍♂️' },
            { value: 'computer', label: 'Computer 💻' },
          ]}
        />

        <Button>Start game!</Button>
      </form>
    </div>
  );
}
