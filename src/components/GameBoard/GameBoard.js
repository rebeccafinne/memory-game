import { GameBoardContainer } from "./GameBoard.style";
import Card from "./Card";

const GameBoard = () => {
  return (
    <GameBoardContainer>
      <Card />
      <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />{" "}
      <Card /> <Card />
      <Card />
    </GameBoardContainer>
  );
};

export default GameBoard;
