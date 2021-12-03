import { CardItem } from "./Card.style";
import { useState } from "react";

const Card = ({ motive, id }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    if (isDisabled) {
      return;
    }
    console.log("id on card", id);
    setIsFlipped(!isFlipped);
    setIsDisabled(!isDisabled);
  };
  console.log(motive);

  return (
    <CardItem onClick={handleClick} isFlipped={isFlipped}>
      {isFlipped && (
        <img
          id={id}
          src={motive}
          alt="puppy1"
          style={{ width: "100%", height: "100%", maxHeight: "10rem" }}
        />
      )}
    </CardItem>
  );
};

export default Card;
