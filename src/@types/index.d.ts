export interface Generation {
  generation: number;
  from: number;
  to: number;
}

export interface ModalProps {
  closeModal: MouseEventHandler<HTMLDivElement>;
  pokemon: PokemonData;
}

export interface ModalListItemProps {
  stat: [string, number | unkown];
}
