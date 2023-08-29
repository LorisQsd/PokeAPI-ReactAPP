// Composants
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';

// Interface Typescript
import { PokemonData } from '../../../../@types/pokemon';
import { PokemonByGenContext } from '../../../contexts/PokemonsByGenContext';

export default function PokemonList() {
  const { pokemonsByGen, clearPokemonsData } = useContext(PokemonByGenContext);

  const [showModal, setShowModal] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  function handleClick(id: number) {
    setShowModal(true);
    const foundedPokemon = pokemonsByGen.find(
      (pokemonData) => pokemonData.pokedexId === id
    );
    setPokemon(foundedPokemon as PokemonData);
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLDivElement>,
    id: number
  ) {
    if (event.code === 'Enter') {
      handleClick(id);
    }
  }

  // Pour chaque pokemon compris dans les datas de pokemonsData alors je créer un élément JSX
  const items = pokemonsByGen.map((pokemonData) => (
    <div
      role="tablist"
      key={pokemonData.pokedexId}
      onClick={() => handleClick(pokemonData.pokedexId)}
      onKeyDown={(event) => handleKeyDown(event, pokemonData.pokedexId)}
      tabIndex={0}
    >
      <li className="flex flex-col items-center justify-center w-48 gap-4 p-4 transition duration-300 cursor-pointer bg-v-red-200 rounded-xl hover:scale-105">
        <img
          src={pokemonData.sprites.regular}
          alt={pokemonData.name.fr}
          className="w-5/6"
        />
        <h2 className="text-md">
          #{pokemonData.pokedexId} {pokemonData.name.fr}
        </h2>
      </li>
    </div>
  ));
  return (
    <>
      <button
        type="button"
        className="p-2 mb-3 text-xl transition duration-300 rounded-md shadow-3xl bg-slate-100 text-v-red-100 hover:bg-v-red-200 hover:text-slate-100 hover:scale-105"
        onClick={clearPokemonsData}
      >
        Vider la liste
      </button>
      <ul className="flex flex-wrap items-center justify-center gap-4">
        {items}
      </ul>
      {showModal &&
        createPortal(
          <Modal
            closeModal={() => setShowModal(false)}
            pokemon={pokemon as PokemonData}
          />,
          document.body
        )}
    </>
  );
}
