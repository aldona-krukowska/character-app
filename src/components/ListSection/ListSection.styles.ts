import styled from "styled-components";

export const ListSection = styled.div`
  height: auto;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;

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
export const CharElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const StarIcon = styled.div`
  cursor: pointer;
  margin-left: auto;
  user-select: none;

  &&:active {
    cursor: pointer;
    color: gold;
  }
`;

export const CrownIcon = styled.div`
  margin-left: 5px;
  font-size: 16px;
  cursor: help;
`;

export const SearchBox = styled.div`
  height: 25rem;
  width: calc(100% - 11rem);
  background-color: black;
  border-radius: 2rem;
  color: whitesmoke;
  font-weight: 400;
  display: flex;
  margin: 3rem;
`;

export const BigImg = styled.img`
  width: 25rem;
  height: 25rem;
  object-fit: cover;
  border-radius: 2rem;
`;

export const SearchText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

export const Styled = {
  ListSection,
  ColumnWrapper,
  Column,
  CharBlock,
  CharElement,
};
