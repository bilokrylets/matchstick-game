import { useSelector } from 'react-redux';
import './App.scss';
import Game from './components/game/Game';
import { selectGame } from './redux/gameSlice';
import SettingScreen from './components/settingsScreen/SettingScreen';

function App() {
  const { gameStatus } = useSelector(selectGame);
  return (
    <div className="app">
      <div className="game_container">
        {gameStatus === 'settings' && <SettingScreen />}
        {gameStatus === 'game' && <Game />}
        {/* {gameStatus === 'finish' && <FinishScreen />} */}
      </div>
    </div>
  );
}

export default App;
