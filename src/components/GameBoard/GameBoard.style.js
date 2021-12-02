import styled from "@emotion/styled";

export const GameBoardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, auto [col-start]);
  grid-column-start: 3;
  grid-column-end: 5;
`;
