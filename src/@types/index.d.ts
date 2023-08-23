export interface Generation {
  generation: number;
  from: number;
  to: number;
}

// Typage incomplet => A compléter si utilisation de données non présente dans l'interface actuelle
export interface PokemonData {
  catch_rate: number;
  category: string;
  egg_groups: [];
  generation: number;
  height: string;
  name: { fr: string; en: string; jp: string };
  pokedexId: number;
  sprites: { regular: string; shiny: string };
  stats: {
    hp: number;
    atk: number;
    def: number;
    spe_atk: number;
    spe_def: number;
    vit: number;
  };
  types: [];
  weight: string;
}

// PROPS

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
