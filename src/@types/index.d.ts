export interface Generation {
  generation: number;
  from: number;
  to: number;
}

export interface PokemonListProps {
  pokemonsData: PokemonData[];
  setPokemonsData: React.Dispatch<React.SetStateAction<PokemonData[]>>;
}

export interface ModalProps {
  closeModal: MouseEventHandler<HTMLDivElement>;
  pokemon: PokemonData;
}

export interface ModalListItemProps {
  stat: [string, number | unkown];
}
