import { StyledContainer } from "./MemoryView.style";
import GameBoard from "../components/GameBoard";
import ScoreContainer from "../components/ScoreContainer";

const MemoryView = () => {
  return (
    <StyledContainer>
      <ScoreContainer />
      <GameBoard />
    </StyledContainer>
  );
};

export default MemoryView;
