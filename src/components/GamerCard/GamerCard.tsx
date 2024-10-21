import { useSelector } from 'react-redux';
import styles from './gamerCard.module.scss';

import MatchesBunch from '../MatchesBunch/MatchesBunch';
import { selectGame } from '../../store/gameSlice';
import PlayerInput from './PlayerInput/PlayerInput';

type Props = {
  label: string;
  status: 'player' | 'computer' | 'finishPlayer' | 'finishComputer';
};
export default function GamerCard({ label, status }: Props) {
  const { currentTurn, computerMatches, playerMatches } =
    useSelector(selectGame);

  const isPlayer = status === 'player' || status === 'finishPlayer';
  const isFinish = status === 'finishComputer' || status === 'finishPlayer';

  return (
    <div
      className={`${
        !isFinish && currentTurn !== status ? styles.disable : ''
      } ${styles.gamerCard} ${!isPlayer && styles.gamerCard_end} `}
    >
      <h3 className={styles.cardTitle}>{label}</h3>
      <p className={styles.match}>
        {isPlayer ? playerMatches : computerMatches} matches
      </p>

      {!isFinish && (
        <>
          <MatchesBunch matches={isPlayer ? playerMatches : computerMatches} />
          {status === 'player' && <PlayerInput />}
        </>
      )}
    </div>
  );
}
