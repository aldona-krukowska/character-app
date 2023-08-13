import React, { useEffect, useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { Footer } from "./components/Footer/Footer";
import { Character } from "./types/Character.types";
import { fetchCharacters } from "./api/fetchCharacters";
import { Header } from "./components/Header/Header";
import { ListSection } from "./components/ListSection/ListSection";

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

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

  return (
    <div>
      <Navigation />
      <Header characters={characters} />
      <ListSection />
      <Footer />
    </div>
  );
};

export default App;
