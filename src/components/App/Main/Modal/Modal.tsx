// SCSS
import './modal.scss';
import './typesColor.scss';
import './mqueries.scss';

// Composants
import ModalListItem from './ModalListItem';

import { ModalProps } from '../../../../@types';

export default function Modal({ closeModal, pokemon }: ModalProps) {
  const stats = [pokemon.stats].map((obj) => [...Object.entries(obj)]);
  console.log(pokemon);
  return (
    <div className="modal" onClick={closeModal}>
      <div
        className="modal__content slide"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={closeModal} className="modal__content-btn--close">
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
                <p className={'type__paragraph ' + type.name.toLowerCase()}>
                  {type.name}
                </p>
              ))}
            </div>

            <h4 className="stats__title">Statitistiques</h4>

            <ul className="stats__list">
              {stats[0].map((stat) => (
                <ModalListItem stat={stat} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
