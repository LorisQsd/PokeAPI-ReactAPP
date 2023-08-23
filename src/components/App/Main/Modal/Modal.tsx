/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
// SCSS
import './modal.scss';
import './typesColor.scss';
import './mqueries.scss';

import { nanoid } from 'nanoid';

// Composants
import ModalListItem from './ModalListItem';

import { ModalProps } from '../../../../@types';

export default function Modal({ closeModal, pokemon }: ModalProps) {
  const stats = [pokemon.stats].map((obj) => [...Object.entries(obj)]);

  function handleKeyDown(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.code === 'Escape') {
      closeModal();
    }
  }

  return (
    // Début de rendu de modal accessible
    <dialog
      className="modal"
      onClick={closeModal}
      onKeyDown={(event) => handleKeyDown(event)}
    >
      <div
        className="modal__content slide"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <button
          type="button"
          onClick={closeModal}
          className="modal__content-btn--close"
        >
          X
        </button>
        <h2 className="modal__content-title">Détails du Pokemon</h2>

        <div className="modal__content-infos">
          <img
            src={pokemon.sprites.regular}
            alt={pokemon.name.fr}
            className="infos__img"
          />
          <div className="infos__right">
            <h3 className="infos__right-subtitle">
              #{pokemon.pokedexId} {pokemon.name.fr}
            </h3>
            <div className="types-container">
              {pokemon.types.map((type: { name: string }) => (
                <p
                  key={nanoid(8)}
                  className={`type__paragraph ${type.name.toLowerCase()}`}
                >
                  {type.name}
                </p>
              ))}
            </div>

            <h4 className="stats__title">Statitistiques</h4>

            <ul className="stats__list">
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
