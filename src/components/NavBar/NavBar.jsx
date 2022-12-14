import './NavBar.css';
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile.svg';

function NavBar({ isOpen, onClose }) {

const styleNavBar = isOpen ? "nav-bar nav-bar_opened" : "nav-bar";
const styleOverlay = isOpen ? "nav-bar__overlay nav-bar__overlay_opened" : "nav-bar__overlay";

return (
  <div className={styleOverlay} onClick={onClose} >
    <nav className={styleNavBar} >
      <button type="button" className="nav-bar__close-button" onClick={onClose}></button>
      <div className="nav-bar__container" onClick={e => e.stopPropagation()}>
        <ul className="nav-bar__list">
          <li className="nav-bar__link-container">
            <NavLink
              exact to="/"
              className="nav-bar__link"
              activeClassName="nav-bar__link_active"
              onClick={onClose}>Главная</NavLink>
          </li>
          <li className="nav-bar__link-container">
            <NavLink
              to="/movies"
              className="nav-bar__link"
              activeClassName="nav-bar__link_active"
              onClick={onClose}>Фильмы</NavLink>
          </li>
          <li className="nav-bar__link-container">
            <NavLink
              to="/saved-movies"
              className="nav-bar__link"
              activeClassName="nav-bar__link_active"
              onClick={onClose}>Сохраненные фильмы</NavLink  >
          </li>
        </ul>
        <div className="nav-bar__account">
          <NavLink to="/profile" className="nav-bar__account-link" onClick={onClose}>Аккаунт</NavLink>
          <div className="nav-bar__account-img-container">
            <img src={profile} alt="account" className="nav-bar__account-img" />
          </div>
        </div>
      </div>
    </nav>
  </div>
  );
}

export default NavBar;