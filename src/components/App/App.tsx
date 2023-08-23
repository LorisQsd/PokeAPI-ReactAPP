// Hooks - useEffect et useState
import { useEffect, useState } from 'react';

// Composants
import Header from './Header/Header';
import Main from './Main/Main';

// Interfaces TypeScript
import { Generation, PokemonData } from '../../@types';

// SCSS
import '../../styles/index.scss';

// Assets
import Loader from '../../assets/spinning-circles.svg';

function App() {
  // Initialisation des states
  const [generationToFetch, setGenerationToFetch] = useState<
    number | undefined
  >(undefined);
  const [pokemonsData, setPokemonsData] = useState<PokemonData[]>([]);
  const [generationBtns, setGenerationBtns] = useState<Generation[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Appel API pour création des boutons de génération
  useEffect(() => {
    setIsLoading(true);
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

        setIsLoading(false);
      } catch (error) {
        console.trace(error);
      }
    }

    fetchData();
  }, []);

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

        setIsLoading(false);
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
        setPokemonsData={setPokemonsData}
      />
      {isLoading && <img src={Loader} alt="Loader" className="loader" />}
    </div>
  );
}

export default App;
