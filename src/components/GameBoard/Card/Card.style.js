import styled from "@emotion/styled";

export const CardItem = styled.button`
  background: ${(props) => (props.isFlipped ? "#faf6f7" : "#534447")};
  padding: 1rem;
  width: 10rem;
  height: 12rem;
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
    box-shadow: ${(props) =>
      props.isFlipped ? "5px 2px 2px #3e3335" : "10px 5px 5px #3e3335"};
  }
`;
