import { useEffect, useState } from "react";
import { fetchCharacters } from "../../api/fetchCharacters";
import { Character } from "../../types/Character.types";
import {
  BigImg,
  CharBlock,
  CharElement,
  Column,
  ColumnWrapper,
  CrownIcon,
  SearchBox,
  SearchText,
  StarIcon,
  Styled,
} from "./ListSection.styles";

export const ListSection = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [favorites, setFavorites] = useState<Character[]>([]);
  const [filteredFavorites, setFilteredFavorites] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const charactersData = await fetchCharacters();
        setCharacters(charactersData);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchCharacterData();
    setFilteredFavorites(favorites);
  }, [favorites]);

  const toggleFavorite = (character: Character) => {
    if (favorites.some((fav) => fav.id === character.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== character.id));
    } else {
      setFavorites([...favorites, character]);
    }
  };

  const handleFilterChange = (filterText: string) => {
    const filteredFavorites = favorites.filter((fav) =>
      fav.fullName.toLowerCase().includes(filterText.toLowerCase())
    );
    setFilteredFavorites(filteredFavorites);
  };

  return (
    <Styled.ListSection>
      <SearchBox>
        <BigImg
          src={
            "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i8AVUgpNXk7A/v1/-1x-1.png"
          }
          alt="Zdjęcie samochodu"
        />
        <SearchText>
          <h4>
            Search through the list of your favorite characters from Game of
            Thrones
          </h4>
          <input
            type="text"
            placeholder="Search character..."
            onChange={(e) => handleFilterChange(e.target.value)}
          />
        </SearchText>
      </SearchBox>
      <ColumnWrapper>
        <Column>
          <ul>
            {characters.map((character) => (
              <CharBlock key={character.id}>
                <CharElement>
                  <img src={character.imageUrl} alt={character.fullName} />
                  <p>{character.fullName}</p>
                  {character.title.includes("Lady") ||
                  character.title.includes("Lord") ? (
                    <CrownIcon title={character.title}>👑</CrownIcon>
                  ) : null}
                </CharElement>
                <StarIcon
                  className={`star-icon ${
                    favorites.some((fav) => fav.id === character.id)
                      ? "active"
                      : ""
                  }`}
                  onClick={() => toggleFavorite(character)}
                  title={
                    favorites.some((fav) => fav.id === character.id)
                      ? "Remove from Favorites"
                      : "Add to Favorites"
                  }
                >
                  {favorites.some((fav) => fav.id === character.id)
                    ? "⭐"
                    : "➕"}
                </StarIcon>
              </CharBlock>
            ))}
          </ul>
        </Column>
        <Column>
          {/* My Favorites list */}
          <h2>My Favorites</h2>
          <ul>
            {filteredFavorites.map((character) => (
              <CharBlock key={character.id}>
                <CharElement>
                  <img src={character.imageUrl} alt={character.fullName} />
                  {character.fullName}
                </CharElement>
                <StarIcon
                  className="star-icon active"
                  onClick={() => toggleFavorite(character)}
                  title="Remove from Favorites"
                >
                  ⭐
                </StarIcon>
              </CharBlock>
            ))}
          </ul>
        </Column>
      </ColumnWrapper>
    </Styled.ListSection>
  );
};
