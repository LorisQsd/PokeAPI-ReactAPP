// Composants
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from '../Modal/Modal';

// Interface Typescript
import { PokemonListProps, PokemonData } from '../../../../@types';

// SCSS
import './pokemonList.scss';

export default function PokemonList({
  pokemonsData,
  setPokemonsData,
}: PokemonListProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  function handleClick(id: number) {
    setShowModal(true);
    const filteredPokemon = pokemonsData.find(
      (pokemonData) => pokemonData.pokedexId === id
    );
    setPokemon(filteredPokemon as PokemonData);
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
  const items = pokemonsData.map((pokemonData) => (
    <div
      role="tablist"
      key={pokemonData.pokedexId}
      onClick={() => handleClick(pokemonData.pokedexId)}
      onKeyDown={(event) => handleKeyDown(event, pokemonData.pokedexId)}
      tabIndex={0}
    >
      <li className="pokemon__card">
        <img
          src={pokemonData.sprites.regular}
          alt={pokemonData.name.fr}
          className="card__img"
        />
        <h2 className="card__title">
          #{pokemonData.pokedexId} {pokemonData.name.fr}
        </h2>
      </li>
    </div>
  ));
  return (
    <>
      <button
        type="button"
        className="shadow-3xl bg-slate-100 text-v-red-100 p-2 rounded-md text-xl transition duration-300 hover:bg-v-red-200 hover:text-slate-100 hover:scale-105 mb-3"
        onClick={() => setPokemonsData([])}
      >
        Vider la liste
      </button>
      <ul className="pokemon__list">{items}</ul>
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
