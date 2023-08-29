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
  /** Change la génération à rechercher - Call API => Mise à jour du state pokemonsByGen */
  setGeneration: (generation: number) => void;
  /** Vide le contenu de pokemonsByGen */
  clearPokemonsData: MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
}

const PokemonByGenContext = createContext<PokemonByGenType>({
  pokemonsByGen: [],
  generationToFetch: null,
  setGeneration: () => {},
  clearPokemonsData: () => {},
  loading: false,
});

function PokemonByGenProvider({ children }: { children: ReactElement }) {
  const [generationToFetch, setGenerationToFetch] = useState(0);
  const [pokemonsByGen, setPokemonsByGen] = useState<PokemonData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const pokemonsDatas = useMemo(() => {
    const setGeneration = (generation: number) => {
      setPokemonsByGen([]); // On reset les datas de pokemonsByGen pour permettre l'affichage du loader
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
      loading,
    };
  }, [pokemonsByGen, generationToFetch, loading]);

  useEffect(() => {
    // On prévient un premier appel API inutil au premier rendu de l'app
    if (!generationToFetch) return;
    async function fetchPokemonsByGen() {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `https://api-pokemon-fr.vercel.app/api/v1/gen/${generationToFetch}`
        );

        // eslint-disable-next-line no-console
        console.log('appel API pour les pokemons');
        setPokemonsByGen(data);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
      } finally {
        setLoading(false);
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
