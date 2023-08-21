import Form from './Form';
import GenerationBtns from './GenerationBtns';
import PokemonList from './PokemonList';

import { MainProps } from '../../../@types';

export default function Main({
  generationBtns,
  setGenerationToFetch,
  pokemonsData,
}: MainProps) {
  return (
    <main className="main">
      <Form />
      {generationBtns.length ? (
        <GenerationBtns
          generationBtns={generationBtns}
          setGenerationToFetch={setGenerationToFetch}
        />
      ) : (
        <p className="message">Erreur API - Pas de bouton à générer</p>
      )}
      {pokemonsData.length ? (
        <PokemonList pokemonsData={pokemonsData} />
      ) : (
        <p className="message">
          Clique sur une génération pour afficher la liste de tes pokémons
          préférés !
        </p>
      )}
    </main>
  );
}
