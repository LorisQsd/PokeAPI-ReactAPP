import { useEffect, useState } from 'react';

import Header from './Header/Header';
import Main from './Main/Main';

// Import Interfaces TypeScript
import { Generation, PokemonData } from '../../@types';

import '../../styles/index.scss';

function App() {
  const [generationToFetch, setGenerationToFetch] = useState<
    number | undefined
  >(undefined);
  const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
  const [generationBtns, setGenerationBtns] = useState<Generation[]>([]);

  // Appel API pour création des boutons de génération
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api-pokemon-fr.vercel.app/api/v1/gen`
        );

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const data = await response.json();

        // Amélioration à faire concernant le typage
        const typedData: Generation[] = Object.values(data);

        setGenerationBtns(typedData);

        console.log('Data des boutons de génération récupérée !');
      } catch (error) {
        console.trace(error);
      }
    }

    fetchData();
  }, []);

  // Appel API pour récupérer les datas des pokemons selon leur génération
  useEffect(() => {
    if (!generationToFetch) return;
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api-pokemon-fr.vercel.app/api/v1/gen/${generationToFetch}`
        );

        if (!response.ok) {
          throw new Error(`${response.status}`);
        }

        const data = await response.json();

        // J'avais la flemme de finir le typage
        const typedData: PokemonData[] = Object.values(data);

        setPokemonsData(typedData);

        console.log('Data des pokemons récupéré !');
      } catch (error) {
        console.trace(error);
      }
    }

    fetchData();
  }, [generationToFetch]);

  return (
    <div className="App">
      <Header />
      <Main
        generationBtns={generationBtns}
        setGenerationToFetch={setGenerationToFetch}
        pokemonsData={pokemonsData}
      />
    </div>
  );
}

export default App;
