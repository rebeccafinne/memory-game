import { usePlayerNameContext } from '../Context/GameContext'; // Importera din hook

export const PlayerForm = () => {
  const { state, setState } = usePlayerNameContext();

  const handleStartGame = (event) => {
    event.preventDefault();
    setState({
      ...state,
      playerOneName: event.target.playerOne.value,
      playerTwoName: event.target.playerTwo.value,
    });
  };

  return (
    <form onSubmit={handleStartGame}>
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
  );
};
