import { useSelector } from 'react-redux';
import './App.css';
import Game from './components/game/Game';
import { selectGame } from './redux/gameSlice';
import FinishScreen from './components/finishScreen/FinishScreen';

function App() {
  const { gameStatus } = useSelector(selectGame);
  return (
    <>
      {gameStatus === 'game' && <Game />}
      {gameStatus === 'finish' && <FinishScreen />}
    </>
  );
}

export default App;
