// Composants
import GenerationBtns from './GenerationBtns/GenerationBtns';
import PokemonList from './PokemonList/PokemonList';
import Message from './Message';

// Interface TypeScript
import { MainProps } from '../../../@types';
import Loader from '../Loader';

export default function Main({
  generationBtns,
  setGenerationToFetch,
  pokemonsData,
  setPokemonsData,
}: MainProps) {
  return (
    <main className="w-full py-3">
      {/* <Form /> */}
      {/* Si ma liste de bouton de génération a au moins un élément alors je peux afficher mon composant sinon j'affiche un message d'erreur */}
      {generationBtns.length ? (
        <GenerationBtns
          generationBtns={generationBtns}
          setGenerationToFetch={setGenerationToFetch}
        />
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
