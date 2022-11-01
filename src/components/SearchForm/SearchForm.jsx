import { useEffect } from 'react';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import './SearchForm.css';

function SearchForm({ onSearch, textSearch, handleTextSearch, isChecked, onChecked }) {

  function handleChange(evt) {
    handleTextSearch(evt.target.value);
  }

  function handleChecked(evt) {
    onChecked(evt.target.checked)
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSearch({ textSearch, isChecked });
  }

  useEffect(() => {
    onSearch({ textSearch, isChecked });
  }, [isChecked])

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <div className="search__string">
          <input
            type="text"
            className="search__input"
            placeholder="Фильм"
            value={textSearch || ''}
            onChange={handleChange} />
          <button type="submit" className="search__button">Найти</button>
        </div>
        <FilterCheckbox onChecked={handleChecked} isChecked={isChecked} />
      </form>
      <hr className="search__line" />
    </section>
  );
}

export default SearchForm;