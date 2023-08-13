import { useEffect, useState } from "react";
import { fetchCharacters } from "../../api/fetchCharacters";
import { Character } from "../../types/Character.types";
import { CharBlock, Column, ColumnWrapper, Styled } from "./ListSection.styles";

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
  }, []);

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
      <ColumnWrapper>
        <Column>
          <ul>
            {characters.map((character) => (
              <CharBlock key={character.id}>
                <img src={character.imageUrl} alt={character.fullName} />
                <p>{character.fullName}</p>
                {character.title.includes("Lady") ||
                character.title.includes("Lord") ? (
                  <span className="crown-icon" title={character.title}>
                    👑
                  </span>
                ) : null}
                <span
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
                  ⭐
                </span>
              </CharBlock>
            ))}
          </ul>
        </Column>
        <Column>
          {/* My Favorites list */}
          <h2>My Favorites</h2>
          <ul>
            {filteredFavorites.map((character) => (
              <li key={character.id}>
                <img src={character.imageUrl} alt={character.fullName} />
                {character.fullName}
                <span
                  className="star-icon active"
                  onClick={() => toggleFavorite(character)}
                  title="Remove from Favorites"
                >
                  ⭐
                </span>
              </li>
            ))}
          </ul>
          <input
            type="text"
            placeholder="Filter My Favorites"
            onChange={(e) => handleFilterChange(e.target.value)}
          />
        </Column>
      </ColumnWrapper>
    </Styled.ListSection>
  );
};
