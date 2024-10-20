import { useSelector } from 'react-redux';
import { selectGame } from '../../redux/gameSlice';
import Match from './Match/Match';
import { useMemo, useState } from 'react';
import styles from './matchesBunch.module.scss';

type MatchCoordinate = {
  rotation: number;
  coordinateX: number;
  coordinateY: number;
};

type MatchesBunchProps = { matches: number };
export default function MatchesBunch({ matches }: MatchesBunchProps) {
  const { startMatches } = useSelector(selectGame);
  const [matchesCoordinates, setMatchesCoordinates] = useState<
    MatchCoordinate[]
  >([]);

  useMemo(() => {
    const initialMatches: MatchCoordinate[] = Array.from(
      { length: startMatches },
      () => ({
        rotation: Math.random() * 360,
        coordinateX: Math.random() * 50,
        coordinateY: Math.random() * 50,
      }),
    );
    setMatchesCoordinates(initialMatches);
  }, [startMatches]);

  console.log(matchesCoordinates);

  return (
    <div className={styles.bunch}>
      {matchesCoordinates.map((match, index) => (
        <Match
          rotation={match.rotation}
          coordinateX={match.coordinateX}
          coordinateY={match.coordinateY}
          isHidden={index >= matches}
        />
      ))}
    </div>
  );
}
