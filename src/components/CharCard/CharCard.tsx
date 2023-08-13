import { Character } from "../../types/Character.types";
import { Styled } from "./CharCard.styles";

interface CharCardProps {
  character: Character;
}

export const CharCard: React.FC<CharCardProps> = ({ character }) => {
  return (
    <Styled.CharCard>
      <img src={character.imageUrl} />
      <p>{character.fullName}</p>
    </Styled.CharCard>
  );
};
