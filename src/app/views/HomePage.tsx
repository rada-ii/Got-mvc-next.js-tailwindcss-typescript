"use client";
import { useEffect, useState } from "react";
import { getCharacters } from "../controllers/characterController";
import { Character } from "../models/character";

const HomePage = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [randomCharacter, setRandomCharacter] = useState<Character | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedCharacters: Character[] = await getCharacters();
        setCharacters(fetchedCharacters);
      } catch (error) {
        console.error("Failed to fetch characters:", error);
        setError("Error fetching characters");
      }
    };

    fetchData();
  }, []);

  const handleFetchRandomCharacter = () => {
    const randomIndex = Math.floor(Math.random() * characters.length);
    const character = characters[randomIndex];
    setRandomCharacter(character);
  };

  return (
    <div className="flex flex-col gap-3 justify-end items-center">
      {error && <p>Error: {error}</p>}
      <button
        onClick={handleFetchRandomCharacter}
        className="rounded-lg bg-teal-300 px-3 text-amber-700 mx-auto hover:bg-teal-800 hover:text-amber-200"
      >
        Random Character Details
      </button>
      <p>(click me 😉 &uarr; )</p>
      {randomCharacter && (
        <div>
          <img
            src={randomCharacter.imageUrl}
            alt={randomCharacter.fullName}
            className="rounded-xl w-2/3 h-auto mx-auto"
          />
          <div className="text-emerald-800 text-center">
            <p>{randomCharacter.fullName}</p>
            <p>{randomCharacter.title}</p>
            <p>{randomCharacter.family}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
