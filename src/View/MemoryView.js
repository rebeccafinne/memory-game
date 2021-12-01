import { GameBoard } from "../components/GameBoard";
import { ScoreContainer } from "../components/ScoreContainer";
import { StyledContainer } from "./MemoryView.style";

export const MemoryView = () => {
  return (
    <StyledContainer>
      <ScoreContainer />
      <GameBoard />
    </StyledContainer>
  );
};
