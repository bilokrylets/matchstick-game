import { useSelector } from 'react-redux';
import { selectGame } from '../../store/gameSlice';

export default function Finish() {
  const { computerMatches } = useSelector(selectGame);

  return (
    <div>{computerMatches % 2 ? <p>Player win</p> : <p>Computer win</p>}</div>
  );
}
