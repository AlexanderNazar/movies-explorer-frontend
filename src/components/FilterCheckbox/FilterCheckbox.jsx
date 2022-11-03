import './FilterCheckbox.css';

function FilterCheckbox({ onChecked, isChecked }) {

  return (
    <label htmlFor="short" className="search__checkbox-label">Короткометражки
      <input
        type="checkbox"
        id="short"
        name="short"
        className="search__checkbox"
        onChange={onChecked}
        checked={isChecked} />
      <span className="search__checkbox-pseudo-item"></span>
    </label>
  );
}

export default FilterCheckbox;