export interface Generation {
  generation: number;
  from: number;
  to: number;
}

export interface MainProps {
  generationBtns: Generation[];
  setGenerationToFetch: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  pokemonsData: PokemonData[];
  setPokemonsData: React.Dispatch<React.SetStateAction<PokemonData[]>>;
}

export interface GenerationBtnsProps {
  generationBtns: Generation[];
  setGenerationToFetch: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
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
  stat: [string, number];
}
