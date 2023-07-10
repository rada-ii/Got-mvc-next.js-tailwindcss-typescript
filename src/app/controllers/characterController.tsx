import { Character } from "../models/character";
import { fetchCharacters } from "../services/api";

export const getCharacters = async (): Promise<Character[]> => {
  try {
    const characters = await fetchCharacters();
    return characters.map((character: any) => ({
      id: character.characterId,
      firstName: character.firstName,
      lastName: character.lastName,
      fullName: `${character.firstName} ${character.lastName}`,
      title: character.title,
      family: character.family,
      imageUrl: character.imageUrl,
    }));
  } catch (error) {
    console.error("Error getting characters:", error);
    throw error;
  }
};
