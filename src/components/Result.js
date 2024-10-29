export const Result = ({ winner, onClick }) => {
  return (
    <>
      <h2 className="center-text">
        {winner === 'tie' ? "It's a tie!" : 'And the winner is: ' + winner}
      </h2>
      <button onClick={onClick}>Play again</button>
    </>
  );
};
