import { useSelector } from 'react-redux';
import { selectGame } from '../../../redux/gameSlice';
import styles from './gamerCard.module.scss';
import PlayerInput from '../../PlayerInput/PlayerInput';
import MatchesBunch from '../../MatchesBunch/MatchesBunch';

type Props = {
  label: string;
  status: 'player' | 'computer';
};
export default function GamerCard({ label, status }: Props) {
  const { currentTurn, computerMatches, playerMatches } =
    useSelector(selectGame);

  const isPlayer = status === 'player';

  return (
    <div
      className={`${currentTurn !== status ? styles.disable : ''} ${
        styles.gamerCard
      } ${!isPlayer && styles.gamerCard_end} `}
    >
      <h3 className={styles.cardTitle}>{label}</h3>
      <p className={styles.match}>
        {status} has {isPlayer ? playerMatches : computerMatches} matches
      </p>
      <MatchesBunch matches={isPlayer ? playerMatches : computerMatches} />

      {isPlayer && <PlayerInput />}
    </div>
  );
}
