import '../index';
import { PlayerForm } from './PlayerForm';

export const GameSetup = ({ handleStartGame }) => {
  const handleSubmit = () => {
    handleStartGame();
  };

  return (
    <>
      <h2 className="center-text">Welcome to Memory Game!</h2>
      <h3 className="center-text">Please enter your names to start.</h3>{' '}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <PlayerForm onClick={handleSubmit} />
      </div>
    </>
  );
};
