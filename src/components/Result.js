import { Button } from './Button';

export const Result = ({ winner, onClick }) => {
  return (
    <>
      <h2 className="center-text">
        {winner === 'tie' ? "It's a tie!" : 'And the winner is: ' + winner}
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button onClick={onClick}>Play again</Button>
      </div>{' '}
    </>
  );
};
