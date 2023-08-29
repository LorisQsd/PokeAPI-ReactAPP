import { useContext } from 'react';
// Composants
import GenerationBtns from './GenerationBtns/GenerationBtns';
import PokemonList from './PokemonList/PokemonList';
import Message from './Message';

// Interface TypeScript
import Loader from '../Loader';
import { GenerationsButtonsContext } from '../../context/GenerationsButtons';
import { PokemonByGenContext } from '../../context/PokemonsByGenContext';

export default function Main() {
  const generationButtons = useContext(GenerationsButtonsContext);

  const { pokemonsByGen } = useContext(PokemonByGenContext);

  return (
    <main className="w-full py-3">
      {/* <Form /> */}
      {/* Si ma liste de bouton de génération a au moins un élément alors je peux afficher mon composant sinon j'affiche un message d'erreur */}
      {generationButtons.length ? <GenerationBtns /> : <Loader />}
      {/* Si mon state pokemonsData comprend au moins un pokemon c'est qu'il y a eu appel API, donc je peux afficher mon composant PokemonList */}
      {pokemonsByGen.length ? (
        <PokemonList />
      ) : (
        <Message content="Clique sur une génération pour afficher la liste de tes pokémons préférés !" />
      )}
    </main>
  );
}
