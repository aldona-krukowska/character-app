import { Character } from "../types/Character.types";

// Game of Thrones
const API_URL = "https://thronesapi.com/api/v2/Characters";

export async function fetchCharacters(): Promise<Character[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }
    const data = await response.json();
    const charactersNotFromLannister = data.filter(
      (character: Character) => character.title !== "House Lannister"
    );
    return charactersNotFromLannister;
  } catch (error) {
    throw new Error("Error fetching characters");
  }
}
