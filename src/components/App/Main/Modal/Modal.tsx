// SCSS
import './modal.scss';

interface ModalProps {
  // Je n'ai pas encore trouver le type à attribuer
  closeModal: React.DOMAttributes<HTMLDivElement>;
}

export default function Modal({ closeModal }: ModalProps) {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button onClick={closeModal} className="modal__content-btn--close">
          X
        </button>
        <h2 className="modal__content-title">Détails du Pokemon</h2>

        <div className="modal__content-infos">
          <img
            src="https://raw.githubusercontent.com/Yarkis01/PokeAPI/images/sprites/154/regular.png"
            alt=""
            className="infos__img"
          />
          <div className="infos__right">
            <h3 className="infos__right-subtitle">#154 Méganium</h3>
            <div className="types-container">
              <p className="type__paragraph plante">Plante</p>
            </div>

            <h4 className="stats__title">Statitistiques</h4>

            <ul className="stats__list">
              <li className="stats__list-item">
                <span>hp</span>
                <span>80</span>
                <div className="progress-bar">
                  <div
                    className="progress-bar--prog"
                    style={{ width: '31%' }}
                  ></div>
                </div>
              </li>
              <li className="stats__list-item">
                <span>hp</span>
                <span>80</span>
                <div className="progress-bar">
                  <div
                    className="progress-bar--prog"
                    style={{ width: '31%' }}
                  ></div>
                </div>
              </li>
              <li className="stats__list-item">
                <span>hp</span>
                <span>80</span>
                <div className="progress-bar">
                  <div
                    className="progress-bar--prog"
                    style={{ width: '31%' }}
                  ></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
