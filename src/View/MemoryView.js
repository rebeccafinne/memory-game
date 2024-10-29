import { StyledGameBoardContainer } from './MemoryView.style';
import GameBoard from '../components/GameBoard';
import ScoreContainer from '../components/ScoreContainer';
import { useState, useEffect } from 'react';
import { GameSetup } from '../components/GameSetup';
import { Result } from '../components/Result';
import { usePlayerNameContext } from '../Context/GameContext';

const MemoryView = () => {
  const [gameState, setGameState] = useState('preStart');
  const [playerOneTurn, setPlayerOneTurn] = useState(true);
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);

  const { state } = usePlayerNameContext();

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

  const handleStartGame = () => {
    setGameState('game');
  };

  const handlePlayAgain = () => {
    setGameState('preStart');
  };

  useEffect(() => {
    if (playerOneScore + playerTwoScore === 6) {
      setGameState('result');
    }
  }, [playerOneScore, playerTwoScore]);

  return (
    <div
      style={{
        backgroundColor: '#d0abb3',
        width: '100vw',
        height: '100vh',
        paddingTop: '1rem',
      }}
    >
      {gameState === 'preStart' && (
        <GameSetup handleStartGame={handleStartGame} />
      )}
      {gameState === 'game' && (
        <StyledGameBoardContainer>
          <ScoreContainer
            playerOneTurn={playerOneTurn}
            playerOneScore={playerOneScore}
            playerTwoScore={playerTwoScore}
          />
          <GameBoard
            playerScored={handlePlayerScored}
            handleNewTurn={handleNewTurn}
          />
        </StyledGameBoardContainer>
      )}
      {gameState === 'result' && (
        <Result
          winner={
            playerTwoScore < playerOneScore
              ? state.playerOneName
              : playerTwoScore === playerOneScore
              ? 'tie'
              : state.playerTwoName
          }
          onClick={handlePlayAgain}
        />
      )}
    </div>
  );
};

export default MemoryView;
