import { CardItem } from './Card.style';

const Card = ({ motive, id, handleCardClick, isDisabled, isFlipped }) => {
  const card = {
    motive: motive,
    id: id,
    isDisabled: isDisabled,
    isFlipped: isFlipped,
  };

  const handleClick = () => {
    handleCardClick(card);
  };

  return (
    <CardItem onClick={handleClick} isFlipped={isFlipped}>
      {isFlipped && (
        <img
          id={id}
          src={motive}
          alt="puppy1"
          style={{ width: '100%', height: '100%', maxHeight: '10rem' }}
        />
      )}
    </CardItem>
  );
};

export default Card;
