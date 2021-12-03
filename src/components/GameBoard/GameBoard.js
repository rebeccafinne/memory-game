import { GameBoardContainer } from "./GameBoard.style";
import Card from "./Card";
import puppy1 from "../../Assets/puppy1.jpeg";
import puppy2 from "../../Assets/puppy2.jpeg";
import puppy3 from "../../Assets/puppy3.jpeg";
import puppy4 from "../../Assets/puppy4.jpeg";
import puppy5 from "../../Assets/puppy5.jpeg";
import puppy6 from "../../Assets/puppy6.jpeg";

const GameBoard = () => {
  const cardContent = [
    { id: "11", motive: puppy1 },
    { id: "12", motive: puppy1 },
    { id: "21", motive: puppy2 },
    { id: "22", motive: puppy2 },
    { id: "31", motive: puppy3 },
    { id: "32", motive: puppy3 },
    { id: "41", motive: puppy4 },
    { id: "42", motive: puppy4 },
    { id: "51", motive: puppy5 },
    { id: "52", motive: puppy5 },
    { id: "61", motive: puppy6 },
    { id: "62", motive: puppy6 },
  ];

  cardContent.sort(() => Math.random() - 0.5);

  return (
    <GameBoardContainer>
      {cardContent.map((card) => (
        <Card key={card.id} id={card.id} motive={card.motive} />
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
