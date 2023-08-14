import React, { createContext, useContext, useState } from "react";
import { Character } from "../types/Character.types";

interface FavoritesContextType {
  favorites: Character[];
  addToFavorites: (character: Character) => void;
  removeFromFavorites: (character: Character) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  return context;
};

export const FavoritesProvider: React.FC = ({ children }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addToFavorites = (character: Character) => {
    setFavorites([...favorites, character]);
  };

  const removeFromFavorites = (character: Character) => {
    setFavorites(favorites.filter((fav) => fav.id !== character.id));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
