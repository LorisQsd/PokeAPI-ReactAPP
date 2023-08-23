export default function Form() {
  return (
    <form className="form">
      <fieldset className="form__input-group">
        <label htmlFor="pokemon" className="form__input-group-label">
          Rechercher un pokémon par son # id :
        </label>
        <div className="form__input-text">
          <input
            type="text"
            name="pokemon"
            id="pokemon"
            className="form__input-text-search"
            placeholder="123"
          />
          <i className="bi bi-search" />
        </div>
      </fieldset>
    </form>
  );
}
