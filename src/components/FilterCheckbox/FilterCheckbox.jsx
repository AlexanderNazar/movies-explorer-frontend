import './FilterCheckbox.css';

function FilterCheckbox() {

return (
  <label htmlFor="short" className="search__checkbox-label">Короткометражки
    <input
      type="checkbox"
      id="short"
      name="short"
      className="search__checkbox"
      value="short" />
    <span className="search__checkbox-pseudo-item"></span>
  </label>
  );
}

export default FilterCheckbox;