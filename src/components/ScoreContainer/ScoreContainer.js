import { PlayerName } from './ScoreContainer.style';
import { usePlayerNameContext } from '../../Context/GameContext'; // Importera din hook

const ScoreContainer = ({ playerOneTurn, playerOneScore, playerTwoScore }) => {
  const { state } = usePlayerNameContext();

  return (
    <div style={{ gridColumnStart: 2, gridColumnEnd: 3 }}>
      <span>
        <PlayerName>
          {state.playerOneName ? state.playerOneName : 'Player 1'}:
          {playerOneTurn && '(Player Turn)'}
        </PlayerName>
        <p>{playerOneScore}</p>
      </span>
      <span>
        <PlayerName>
          {state.playerTwoName ? state.playerTwoName : 'Player 2'}:{' '}
          {!playerOneTurn && '(Player Turn)'}
        </PlayerName>
        <p>{playerTwoScore}</p>
      </span>
    </div>
  );
};

export default ScoreContainer;
