import { useSelector } from 'react-redux';
import { selectGame } from '../../redux/gameSlice';

export default function FinishScreen() {
  const { computerMatches } = useSelector(selectGame);

  return (
    <div>{computerMatches % 2 ? <p>Player win</p> : <p>Computer win</p>}</div>
  );
}
