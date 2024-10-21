import { FormEvent, useState } from 'react';
import styles from './settings.module.scss';
import { useDispatch } from 'react-redux';
import RangeInput from '../../components/UI/RangeInput/RangeInput';
import Select from '../../components/UI/Select/Select';
import Button from '../../components/UI/Button/Button';
import { startGame } from '../../store/gameSlice';
import { AppDispatch } from '../../store/store';

export default function Settings() {
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
        firstTurn: firstTurn,
      }),
    );
  }

  const maxPickRange = Math.floor(startMatches / 2);

  function HandleStartMatches(e: React.ChangeEvent<HTMLInputElement>) {
    let matchNumber = +e.target.value;
    matchNumber += matchNumber % 2 ? 0 : 1;

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
          Start with <b>{String(startMatches)}</b> matches
        </RangeInput>

        <RangeInput
          value={maxMatchPerTurn}
          min={1}
          max={maxPickRange}
          onChange={(e) => setMaxMatchPerTurn(+e.target.value)}
        >
          Max matches pick per turn: <b>{maxMatchPerTurn.toString()}</b>
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
