import styled from "styled-components";

export const Footer = styled.nav`
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;

  h5 {
    font-size: 0.9rem;
    text-transform: uppercase;
    padding: 1rem;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;

export const Styled = { Footer, StyledLink };
