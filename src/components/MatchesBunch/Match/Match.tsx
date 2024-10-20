import styles from './match.module.scss';

type Props = {
  rotation: number;
  coordinateX: number;
  coordinateY: number;
  isHidden: boolean;
};

export default function Match({
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
      className={styles.match}
      style={matchCoordinate}
      hidden={isHidden}
      src="match.svg"
      alt="match"
      height={100}
    />
  );
}
