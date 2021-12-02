import { Card } from "./Card";
import { GameBoardContainer } from "./index.style";

export const GameBoard = () => {
  return (
    <GameBoardContainer>
      <Card />
      <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />{" "}
      <Card /> <Card />
      <Card />
    </GameBoardContainer>
  );
};
