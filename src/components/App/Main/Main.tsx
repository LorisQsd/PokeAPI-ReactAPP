import { useContext } from 'react';
// Composants
import GenerationBtns from './GenerationBtns/GenerationBtns';
import PokemonList from './PokemonList/PokemonList';
import Message from './Message';

// Interface TypeScript
import { PokemonData } from '../../../@types/pokemon';
import Loader from '../Loader';
import { GenerationsButtonsContext } from '../../context/GenerationsButtons';

interface MainProps {
  setGenerationToFetch: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  pokemonsData: PokemonData[];
  setPokemonsData: React.Dispatch<React.SetStateAction<PokemonData[]>>;
}

export default function Main({
  setGenerationToFetch,
  pokemonsData,
  setPokemonsData,
}: MainProps) {
  const generationButtons = useContext(GenerationsButtonsContext);

  return (
    <main className="w-full py-3">
      {/* <Form /> */}
      {/* Si ma liste de bouton de génération a au moins un élément alors je peux afficher mon composant sinon j'affiche un message d'erreur */}
      {generationButtons.length ? (
        <GenerationBtns setGenerationToFetch={setGenerationToFetch} />
      ) : (
        <Loader />
      )}
      {/* Si mon state pokemonsData comprend au moins un pokemon c'est qu'il y a eu appel API, donc je peux afficher mon composant PokemonList */}
      {pokemonsData.length ? (
        <PokemonList
          pokemonsData={pokemonsData}
          setPokemonsData={setPokemonsData}
        />
      ) : (
        <Message content="Clique sur une génération pour afficher la liste de tes pokémons préférés !" />
      )}
    </main>
  );
}
