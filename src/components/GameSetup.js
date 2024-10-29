import '../index';
import { usePlayerNameContext } from '../Context/GameContext'; // Importera din hook

export const GameSetup = ({ handleStartGame }) => {
  const { state, setState } = usePlayerNameContext();

  const handleSubmit = (event) => {
    event.preventDefault();
    setState({
      ...state,
      playerOneName: event.target.playerOne.value,
      playerTwoName: event.target.playerTwo.value,
    });

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
        <form onSubmit={handleSubmit}>
          <label id="playerOneName" className="margin-top">
            Enter name for player one:
          </label>
          <input className="margin-top margin-left" name="playerOne"></input>
          <br />
          <label id="playerTwoName" className="margin-top ">
            Enter name for player two:
          </label>
          <input className="margin-top margin-left" name="playerTwo"></input>
          <br />
          <button type="submit">Start Game</button>
        </form>
      </div>
    </>
  );
};
