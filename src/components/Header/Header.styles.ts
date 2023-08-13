import styled from "styled-components";

export const Header = styled.header`
  height: 40rem;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-bottom: 5rem;

  h1 {
    font-size: 4rem;
    padding: 0 7rem;
  }
`;

export const GreyBox = styled.div`
  height: 32rem;
  width: 100%;
  background-color: whitesmoke;
  border-radius: 0.5rem;
`;

export const Styled = { Header, GreyBox };
