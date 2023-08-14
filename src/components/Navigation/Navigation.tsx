import { Link } from "react-router-dom";
import { Styled } from "./Navigation.styles";

export const Navigation = () => {
  return (
    <Styled.Navigation>
      <h3>Game of Thrones characters</h3>
      <Link to="/favorites">My Favorites</Link>
    </Styled.Navigation>
  );
};
