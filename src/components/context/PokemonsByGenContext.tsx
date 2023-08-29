import {
  MouseEventHandler,
  ReactElement,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import axios from 'axios';

import { PokemonData } from '../../@types/pokemon';

interface PokemonByGenType {
  pokemonsByGen: PokemonData[];
  generationToFetch: number | null;
  setGeneration: (generation: number) => void;
  clearPokemonsData: MouseEventHandler<HTMLButtonElement>;
}

const PokemonByGenContext = createContext<PokemonByGenType>({
  pokemonsByGen: [],
  generationToFetch: null,
  setGeneration: () => {},
  clearPokemonsData: () => {},
});

function PokemonByGenProvider({ children }: { children: ReactElement }) {
  const [generationToFetch, setGenerationToFetch] = useState(0);
  const [pokemonsByGen, setPokemonsByGen] = useState<PokemonData[]>([]);

  const pokemonsDatas = useMemo(() => {
    const setGeneration = (generation: number) => {
      setGenerationToFetch(generation);
    };

    const clearPokemonsData = () => {
      setPokemonsByGen([]);
    };

    return {
      pokemonsByGen,
      generationToFetch,
      setGeneration,
      clearPokemonsData,
    };
  }, [pokemonsByGen, generationToFetch]);

  useEffect(() => {
    async function fetchPokemonsByGen() {
      try {
        const { data } = await axios.get(
          `https://api-pokemon-fr.vercel.app/api/v1/gen/${generationToFetch}`
        );

        setPokemonsByGen(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }
    fetchPokemonsByGen();
  }, [generationToFetch]);

  return (
    <PokemonByGenContext.Provider value={pokemonsDatas}>
      {children}
    </PokemonByGenContext.Provider>
  );
}

export { PokemonByGenContext, PokemonByGenProvider };
