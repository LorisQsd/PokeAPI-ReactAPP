/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// SCSS
import './animations.scss';
import './typesColor.scss';

import { nanoid } from 'nanoid';

// Composants
import ModalListItem from './ModalListItem';

import { ModalProps } from '../../../../@types';

export default function Modal({ closeModal, pokemon }: ModalProps) {
  const stats = [pokemon.stats].map((obj) => [...Object.entries(obj)])

  function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }

  return (
    // Début de rendu de modal accessible
    <dialog
      className="fixed inset-0 flex items-center justify-center w-screen h-screen m-0 border-none bg-black/60 font-bree"
      onClick={closeModal}
      onKeyDown={(event) => handleKeyDown(event)}
    >
      <div
        className="relative px-8 bg-slate-100 max-w-7xl py-9 rounded-xl shadow-3xl slide"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute w-6 h-6 font-sans transition bg-red-600 rounded-sm top-3 right-3 text-slate-100 hover:bg-red-700"
        >
          X
        </button>
        <h2 className="text-3xl text-center text-v-red-100">
          Détails du Pokemon
        </h2>

        <div className="flex gap-4 max-lg:flex-col max-lg:items-center">
          <img
            src={pokemon.sprites.regular}
            alt={pokemon.name.fr}
            className="w-1/2"
          />
          <div className="flex flex-col justify-center w-full gap-2 py-4">
            <h3 className="text-2xl max-lg:text-center">
              #{pokemon.pokedexId} {pokemon.name.fr}
            </h3>
            <div className="flex gap-2">
              {pokemon.types.map((type: { name: string }) => (
                <p
                  key={nanoid(8)}
                  className={`w-fit py-1 px-2 rounded text-slate-100 ${type.name.toLowerCase()}`}
                >
                  {type.name}
                </p>
              ))}
            </div>

            <h4 className="m-1 text-xl">Statitistiques</h4>

            <ul className="flex flex-col gap-2">
              {stats[0].map((stat) => (
                <ModalListItem key={nanoid(8)} stat={stat} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </dialog>
  );
}
