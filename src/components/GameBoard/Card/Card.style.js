import styled from '@emotion/styled';

export const CardItem = styled.button`
  background: ${({ isFlipped }) => (isFlipped ? '#faf6f7' : '#534447')};
  padding: 1rem;
  width: 10rem;
  height: 10rem;
  transform-style: preserve-3d;
  transition: transform 0.6s;
  transform: ${({ isFlipped }) =>
    isFlipped ? 'rotateY(180deg)' : 'rotateY(0)'};
  transition: all ease-in 0.25s;
  @media (min-width: 600px) {
    width: 10rem;
    height: 12rem;
  }
  @media (min-width: 950px) {
    width: 15rem;
    height: 17rem;
  }
  box-shadow: 5px 2px 2px #3e3335;
  border-width: 0;
  &:hover {
    box-shadow: ${({ isFlipped }) =>
      isFlipped ? '5px 2px 2px #3e3335' : '10px 5px 5px #3e3335'};
  }
`;

export const CardFaceFront = styled.div`
  /* Framsidan */

  background-color: #534447; /* Framsidan färg */
`;

export const CardFaceBack = styled.div`
  background-color: #faf6f7; /* Baksidan färg */
  transform: rotateY(180deg); /* Rotera baksidan för att dölja den */
`;
