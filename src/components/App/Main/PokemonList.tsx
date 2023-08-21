import { PokemonListProps } from '../../../@types';

export default function PokemonList({ pokemonsData }: PokemonListProps) {
  console.log('Composant liste');
  console.log(pokemonsData[0]);

  const items = pokemonsData.map((pokemon) => (
    <li key={pokemon.pokedexId} className="pokemon__card">
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
  return <ul className="pokemon__list">{items}</ul>;
}
