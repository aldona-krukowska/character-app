import { Character } from "../../types/Character.types";
import { CardWrapper } from "../CardWrapper/CardWrapper";
import { CharCard } from "../CharCard/CharCard";
import { Styled } from "./Header.styles";

interface HeaderProps {
  characters: Character[];
}

export const Header: React.FC<HeaderProps> = ({ characters }) => {
  return (
    <Styled.Header>
      <Styled.GreyBox>
        <h1>Most popular Game of Thrones characters</h1>
        <CardWrapper>
          {characters.map((character) => {
            if (character.fullName === "Daenerys Targaryen") {
              return <CharCard key={character.id} character={character} />;
            }
            return null;
          })}

          {characters.map((character) => {
            if (character.fullName === "Jon Snow") {
              return <CharCard key={character.id} character={character} />;
            }
            return null;
          })}
        </CardWrapper>
      </Styled.GreyBox>
    </Styled.Header>
  );
};
