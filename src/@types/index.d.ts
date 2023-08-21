export interface Generation {
  generation: number;
  from: number;
  to: number;
}

// Flemme de finir de tout typer
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

// Pas forcément nécessaire de faire une interface pour les MainProps mais on anticipe plus de props
export interface MainProps {
  generationBtns: Generation[];
  setGenerationToFetch: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
  pokemonsData: PokemonData[];
}

// Same here
export interface GenerationBtnsProps {
  generationBtns: Generation[];
  setGenerationToFetch: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}

export interface PokemonListProps {
  pokemonsData: PokemonData[];
}
