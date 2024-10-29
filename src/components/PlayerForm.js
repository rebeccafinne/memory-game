import { Button } from './Button';
import { usePlayerNameContext } from '../Context/GameContext';

export const PlayerForm = ({ onClick }) => {
  const { state, setState } = usePlayerNameContext();

  const handleStartGame = (event) => {
    event.preventDefault();

    setState({
      ...state,
      playerOneName: event.target.playerOne.value,
      playerTwoName: event.target.playerTwo.value,
    });
    onClick();
  };

  return (
    <form onSubmit={handleStartGame}>
      <label id="playerOneName" className="margin-top">
        Player one:
      </label>
      <input className="margin-top margin-left" name="playerOne"></input>
      <br />
      <label id="playerTwoName" className="margin-top ">
        Player two:
      </label>
      <input className="margin-top margin-left" name="playerTwo"></input>
      <br />
      <Button type="submit">Start Game</Button>
    </form>
  );
};
