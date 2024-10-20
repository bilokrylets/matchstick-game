import { useSelector } from 'react-redux';
import { selectGame } from '../../redux/gameSlice';
import styles from './gameCard.module.scss';
import PlayerInput from '../playerInput/PlayerInput';
import MatchesBunch from '../MatchesBunch/MatchesBunch';

type Props = {
  label: string;
  status: 'player' | 'computer';
};
export default function GamerCard({ label, status }: Props) {
  const { currentTurn, computerMatches, playerMatches } =
    useSelector(selectGame);

  const isPlayer = status === 'player';

  return (
    <div className={`${currentTurn !== status ? styles.disable : ''}`}>
      <h3>{label}</h3>
      <MatchesBunch matches={isPlayer ? playerMatches : computerMatches} />
      <p>matchsticks: {isPlayer ? playerMatches : computerMatches}</p>

      <p>Pick matchsticks</p>
      {isPlayer && <PlayerInput />}
    </div>
  );
}
