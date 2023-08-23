// Interfaces Typescript
import { GenerationBtnsProps, Generation } from '../../../@types';

export default function GenerationBtns({
  generationBtns,
  setGenerationToFetch,
}: GenerationBtnsProps) {
  /** Gestionnaire d'event au click sur un bouton de génération -> Changement du state de GenerationToFetch */
  function handleClickGenerationBtn(btn: Generation) {
    setGenerationToFetch(btn.generation);
  }

  // Pour chaque bouton compris dans ma liste des boutons de génération, alors je créer un élément JSX et j'ajoute un listener au click
  // NOTE : Il n'y a pas d'ID durable dans le temps, ici la key fait référence à la génération => amélioration à faire côté API
  const items = generationBtns.map((btn) => (
    <button
      type="button"
      key={btn.generation}
      className="generation__btn"
      onClick={() => handleClickGenerationBtn(btn)}
    >
      Génération {btn.generation}
    </button>
  ));

  return <div className="generation-container">{items}</div>;
}
