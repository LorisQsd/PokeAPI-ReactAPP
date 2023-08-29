// Interfaces Typescript
import { useContext } from 'react';
import { Generation } from '../../../../@types';
import { GenerationsButtonsContext } from '../../../context/GenerationsButtons';

interface GenerationBtnsProps {
  setGenerationToFetch: React.Dispatch<
    React.SetStateAction<number | undefined>
  >;
}

export default function GenerationBtns({
  setGenerationToFetch,
}: GenerationBtnsProps) {
  /** Gestionnaire d'event au click sur un bouton de génération -> Changement du state de GenerationToFetch */
  function handleClickGenerationBtn(btn: Generation) {
    setGenerationToFetch(btn.generation);
  }

  const generationBtns = useContext(GenerationsButtonsContext);

  // Pour chaque bouton compris dans ma liste des boutons de génération, alors je créer un élément JSX et j'ajoute un listener au click
  // NOTE : Il n'y a pas d'ID durable dans le temps, ici la key fait référence à la génération => amélioration à faire côté API
  const items = generationBtns.map((btn) => (
    <li key={btn.generation}>
      <button
        type="button"
        className="p-2 text-xl transition duration-300 rounded-md shadow-3xl bg-slate-100 text-v-red-100 hover:bg-v-red-200 hover:text-slate-100 hover:scale-105"
        onClick={() => handleClickGenerationBtn(btn)}
      >
        Génération {btn.generation}
      </button>
    </li>
  ));
  return (
    <ul className="flex flex-wrap items-center justify-center gap-4 mx-0 my-4">
      {items}
    </ul>
  );
}
