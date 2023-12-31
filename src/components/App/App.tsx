// Hooks - useEffect et useState
import { useEffect, useState } from 'react';

// Composants
import Header from './Header/Header';
import Main from './Main/Main';
import Loader from './Loader';

// Interfaces TypeScript
import { PokemonData } from '../../@types/pokemon';

function App() {
  // Initialisation des states
  const [generationToFetch, setGenerationToFetch] = useState<
    number | undefined
  >(undefined);
  const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Appel API pour récupérer les datas des pokemons selon leur génération
  // On note que le useEffect sera appelé uniquement au changement du state de generationToFetch (cf. tableau des dépendances)
  // Ce dernier est changé au click sur un bouton de génération
  useEffect(() => {
    if (!generationToFetch) return;
    setIsLoading(true);
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
      } catch (error) {
        // eslint-disable-next-line no-console
        console.trace(error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();
  }, [generationToFetch]);

  return (
    <div className="min-h-screen px-4 py-10 text-lg max-w-screen font-bree bg-v-red-100 text-slate-100">
      <Header />
      <Main
        setGenerationToFetch={setGenerationToFetch}
        pokemonsData={pokemonsData}
        setPokemonsData={setPokemonsData}
      />
      {isLoading && <Loader />}
    </div>
  );
}

export default App;
