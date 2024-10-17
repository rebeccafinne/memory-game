import { StyledContainer } from './MemoryView.style';
import GameBoard from '../components/GameBoard';
import ScoreContainer from '../components/ScoreContainer';
import { useState } from 'react';

const MemoryView = () => {
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const handlePlayerScored = () => {
    if (playerOneTurn) {
      setPlayerOneScore((prevScore) => prevScore + 1);
    } else {
      setPlayerTwoScore((prevScore) => prevScore + 1);
    }
  };

  const handleNewTurn = () => {
    setPlayerOneTurn(!playerOneTurn);
  };

  return (
    <StyledContainer>
      <ScoreContainer
        playerOneTurn={playerOneTurn}
        playerOneScore={playerOneScore}
        playerTwoScore={playerTwoScore}
      />
      <GameBoard
        playerScored={handlePlayerScored}
        handleNewTurn={handleNewTurn}
      />
    </StyledContainer>
  );
};

export default MemoryView;
