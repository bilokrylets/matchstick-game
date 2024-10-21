import { useDispatch, useSelector } from 'react-redux';
import { resetSettings, restartGame, selectGame } from '../../store/gameSlice';

import styles from './finish.module.scss';
import Button from '../../components/UI/Button/Button';
import { AppDispatch } from '../../store/store';

export default function Finish() {
  const dispatch: AppDispatch = useDispatch();
  const { computerMatches } = useSelector(selectGame);

  const winnerText = {
    player: {
      title: '🎉 Congratulations! You win! 🎉',
      desc: 'You can play again or start game with new settings',
    },
    computer: {
      title: 'Defeated 🥲. Computer 🤖 win this battle ',
      desc: "Don't give up! You can try again or start game with new settings",
    },
  };

  const winner = computerMatches % 2 ? winnerText.player : winnerText.computer;

  return (
    <div className={styles.finish}>
      <h2>{winner.title}</h2>

      <p>{winner.desc}</p>

      <div className={styles.gameOptions}>
        <Button onClick={() => dispatch(restartGame())}>Start again!</Button>
        <Button onClick={() => dispatch(resetSettings())}>
          Start with new Settings
        </Button>
      </div>
    </div>
  );
}
