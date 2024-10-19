import { useSelector } from 'react-redux';
import './App.css';
import Game from './components/game/Game';
import { selectGame } from './redux/gameSlice';
import SettingScreen from './components/settingsScreen/SettingScreen';

function App() {
  const { gameStatus } = useSelector(selectGame);
  return (
    <>
      {gameStatus === 'settings' && <SettingScreen />}
      {gameStatus === 'game' && <Game />}
      {/* {gameStatus === 'finish' && <FinishScreen />} */}
    </>
  );
}

export default App;
