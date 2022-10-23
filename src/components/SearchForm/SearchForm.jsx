import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm() {

return (
  <section className="search">
    <form className="search__form">
      <div className="search__string">
        <input
          type="text"
          className="search__input"
          placeholder="Фильм"
          required />
        <button type="submit" className="search__button">Найти</button>
      </div>
      <FilterCheckbox />
    </form>
    <hr className="search__line" />
  </section>
  );
}

export default SearchForm;