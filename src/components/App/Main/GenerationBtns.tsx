import { GenerationBtnsProps, Generation } from '../../../@types';

export default function GenerationBtns({
  generationBtns,
  setGenerationToFetch,
}: GenerationBtnsProps) {
  function handleClickGenerationBtn(btn: Generation) {
    setGenerationToFetch(btn.generation);
  }

  const items = generationBtns.map((btn) => (
    <button
      key={btn.generation}
      className="generation__btn"
      onClick={() => handleClickGenerationBtn(btn)}
    >
      Génération {btn.generation}
    </button>
  ));

  return <div className="generation-container">{items}</div>;
}
