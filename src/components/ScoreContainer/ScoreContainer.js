import { PlayerName } from "./ScoreContainer.style";

const ScoreContainer = () => {
  const score = 0;

  return (
    <div style={{ gridColumnStart: 2, gridColumnEnd: 3 }}>
      <span>
        <PlayerName>Player 1:</PlayerName>
        <p>{score}</p>
      </span>
      <span>
        <PlayerName>Player 2:</PlayerName>
        <p>{score}</p>
      </span>
    </div>
  );
};

export default ScoreContainer;
