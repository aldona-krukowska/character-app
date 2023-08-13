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

export const ColumnWrapper = styled.div`
  height: auto;
  gap: 2rem;
  display: flex;
`;

export const Column = styled.div`
  height: auto;
  width: 30vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const CharBlock = styled.li`
  height: auto;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    height: 3rem;
    width: 3rem;
    object-fit: cover;
  }

  p {
    font-size: 1rem;
  }
`;

export const Styled = { ListSection, ColumnWrapper, Column, CharBlock };
