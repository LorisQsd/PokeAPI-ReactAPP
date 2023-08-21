import { GenerationBtnsProps, Generation } from '../../../@types';

export default function GenerationBtns({
  generationBtns,
}: GenerationBtnsProps) {
  const items: JSX.Element[] = generationBtns.map((btn) => (
    <button key={btn.generation} className="generation__btn">
      Génération {btn.generation}
    </button>
  ));

  return <div className="generation-container">{items}</div>;
}
