import { Styled, StyledLink } from "./Footer.styles";

export const Footer = () => {
  return (
    <Styled.Footer>
      <h5>
        We are Game of Thrones fans and we adore the concept of Open Source ❤️️
      </h5>
      <button>
        <StyledLink href="https://github.com/aldona-krukowska">
          Go to GitHub
        </StyledLink>
      </button>

      <p>Made with ❤️ by Aldona 2023</p>
    </Styled.Footer>
  );
};
