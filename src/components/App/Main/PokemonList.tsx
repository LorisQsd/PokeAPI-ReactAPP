// Interface Typescript
import { PokemonListProps } from '../../../@types';

// Composants
import { useState } from 'react';
import { createPortal } from 'react-dom';
import Modal from './Modal/Modal';

export default function PokemonList({ pokemonsData }: PokemonListProps) {
  const [showModal, setShowModal] = useState<boolean>(false);

  // Pour chaque pokemon compris dans les datas de pokemonsData alors je créer un élément JSX
  const items = pokemonsData.map((pokemon) => (
    <li
      key={pokemon.pokedexId}
      className="pokemon__card"
      onClick={() => setShowModal(true)}
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
      <ul className="pokemon__list">{items}</ul>;
      {showModal &&
        createPortal(
          <Modal closeModal={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
