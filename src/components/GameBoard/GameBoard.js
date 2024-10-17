import { GameBoardContainer } from './GameBoard.style';
import Card from './Card';
import { useState, useEffect } from 'react';

import puppy1 from '../../Assets/puppy1.jpeg';
import puppy2 from '../../Assets/puppy2.jpeg';
import puppy3 from '../../Assets/puppy3.jpeg';
import puppy4 from '../../Assets/puppy4.jpeg';
import puppy5 from '../../Assets/puppy5.jpeg';
import puppy6 from '../../Assets/puppy6.jpeg';

const GameBoard = ({ playerScored, handleNewTurn }) => {
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [flippedCards, setFlippedCards] = useState([]);

  const cardContent = [
    { id: '11', motive: puppy1 },
    { id: '12', motive: puppy1 },
    { id: '21', motive: puppy2 },
    { id: '22', motive: puppy2 },
    { id: '31', motive: puppy3 },
    { id: '32', motive: puppy3 },
    { id: '41', motive: puppy4 },
    { id: '42', motive: puppy4 },
    { id: '51', motive: puppy5 },
    { id: '52', motive: puppy5 },
    { id: '61', motive: puppy6 },
    { id: '62', motive: puppy6 },
  ];

  useEffect(() => {
    cardContent.sort(() => Math.random() - 0.5);
  });

  const handleCardClick = (item) => {
    if (!flippedCards.includes(item.id)) {
      setFlippedCards((prev) => [...prev, item.id]);
      if (firstCard !== null && firstCard.id !== item.id) {
        setSecondCard(item);
      } else {
        setFirstCard(item);
      }
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.motive === secondCard.motive) {
        resetThisRoundFlippedCards();
        playerScored();
      } else {
        setFlippedCards(
          flippedCards.filter(
            (id) => id !== firstCard.id && id !== secondCard.id
          )
        );
        resetThisRoundFlippedCards();
        handleNewTurn();
      }
    }
  }, [firstCard, secondCard, playerScored, handleNewTurn, flippedCards]);

  const resetThisRoundFlippedCards = () => {
    setFirstCard(null);
    setSecondCard(null);
  };

  return (
    <GameBoardContainer>
      {cardContent.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          motive={card.motive}
          handleCardClick={handleCardClick}
          isDisabled={card.isDisabled}
          isFlipped={flippedCards.find((id) => id === card.id)}
        />
      ))}
    </GameBoardContainer>
  );
};

export default GameBoard;
