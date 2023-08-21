export interface Generation {
  generation: number;
  from: number;
  to: number;
}

export interface MainProps {
  generationBtns: Generation[];
}

export interface GenerationBtnsProps {
  generationBtns: Generation[];
}
