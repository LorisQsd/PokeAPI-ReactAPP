// Interface Typescript
import { PokemonListProps, PokemonData } from '../../../@types';

// Composants
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal/Modal';

export default function PokemonList({
  pokemonsData,
  setPokemonsData,
}: PokemonListProps) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  function handleClick(id: number) {
    setShowModal(true);
    const pokemon = pokemonsData.find((pokemon) => pokemon.pokedexId === id);
    setPokemon(pokemon as PokemonData);
  }

  // Pour chaque pokemon compris dans les datas de pokemonsData alors je créer un élément JSX
  const items = pokemonsData.map((pokemon) => (
    <li
      key={pokemon.pokedexId}
      className="pokemon__card"
      onClick={() => handleClick(pokemon.pokedexId)}
    >
      <img
        src={pokemon.sprites.regular}
        alt={pokemon.name.fr}
        className="card__img"
      />
      <h2 className="card__title">
        #{pokemon.pokedexId} {pokemon.name.fr}
      </h2>
    </li>
  ));
  return (
    <>
      <button className="refresh-list-btn" onClick={() => setPokemonsData([])}>
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
