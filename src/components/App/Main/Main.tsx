// Composants
import GenerationBtns from './GenerationBtns';
import PokemonList from './PokemonList';

// Interface TypeScript
import { MainProps } from '../../../@types';

export default function Main({
  generationBtns,
  setGenerationToFetch,
  pokemonsData,
  setPokemonsData,
}: MainProps) {
  return (
    <main className="main">
      {/* <Form /> */}
      {/* Si ma liste de bouton de génération a au moins un élément alors je peux afficher mon composant sinon j'affiche un message d'erreur */}
      {generationBtns.length ? (
        <GenerationBtns
          generationBtns={generationBtns}
          setGenerationToFetch={setGenerationToFetch}
        />
      ) : (
        <p className="message">Erreur API - Pas de bouton à générer</p>
      )}
      {/* Si mon state pokemonsData comprend au moins un pokemon c'est qu'il y a eu appel API, donc je peux afficher mon composant PokemonList */}
      {pokemonsData.length ? (
        <PokemonList
          pokemonsData={pokemonsData}
          setPokemonsData={setPokemonsData}
        />
      ) : (
        <p className="message">
          Clique sur une génération pour afficher la liste de tes pokémons
          préférés !
        </p>
      )}
    </main>
  );
}
