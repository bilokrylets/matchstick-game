import { useSelector } from 'react-redux';
import { selectGame } from './store/gameSlice';
import Game from './screens/Game/Game';
import Finish from './screens/Finish/Finish';
import Settings from './screens/Settings/Settings';
import './App.scss';

function App() {
  const { gameStatus } = useSelector(selectGame);
  return (
    <div className="app">
      <div className="game_container">
        {gameStatus === 'settings' && <Settings />}
        {gameStatus === 'game' && <Game />}
        {gameStatus === 'finish' && <Finish />}
      </div>
    </div>
  );
}

export default App;
