import styled from '@emotion/styled';

export const GameBoardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  grid-column-start: 3;
  grid-column-end: 5;
  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 900px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
