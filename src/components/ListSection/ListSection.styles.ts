import styled from "styled-components";

export const ListSection = styled.div`
  height: auto;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
  }
`;

export const SearchBox = styled.div`
  height: 30rem;
  width: 100%;
  background-color: lightgrey;
  border-radius: 0.5rem;
`;

export const Styled = { ListSection, SearchBox };
