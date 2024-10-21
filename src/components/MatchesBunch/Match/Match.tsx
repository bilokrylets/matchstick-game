import { memo } from 'react';
import styles from './match.module.scss';

type Props = {
  rotation: number;
  coordinateX: number;
  coordinateY: number;
  isHidden: boolean;
};

const Match = memo(function ({
  rotation,
  coordinateX,
  coordinateY,
  isHidden,
}: Props) {
  const matchCoordinate = {
    transform: `rotate(${rotation}deg) translate(${coordinateX}px, ${coordinateY}px)`,
  };

  return (
    <img
      className={`${styles.match} ${isHidden && styles.match_hidden}`}
      style={matchCoordinate}
      src="match.svg"
      alt="match"
      height={100}
    />
  );
});

export default Match;
