import { PlayerName } from './ScoreContainer.style';

const ScoreContainer = ({ playerOneTurn, playerOneScore, playerTwoScore }) => {
  return (
    <div style={{ gridColumnStart: 2, gridColumnEnd: 3 }}>
      <span>
        <PlayerName>Player 1: {playerOneTurn && '(Player Turn)'}</PlayerName>
        <p>{playerOneScore}</p>
      </span>
      <span>
        <PlayerName>Player 2: {!playerOneTurn && '(Player Turn)'}</PlayerName>
        <p>{playerTwoScore}</p>
      </span>
    </div>
  );
};

export default ScoreContainer;
