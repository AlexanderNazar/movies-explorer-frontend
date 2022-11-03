import './Navigation.css';
import { NavLink, useLocation } from 'react-router-dom';
import profile from '../../images/profile.svg';

function Navigation() {

  const { pathname } = useLocation();

  const styleLink = pathname === '/' ? "nav__link" : "nav__link nav__link_black";
  const styleAccountLink = pathname === '/' ? "nav__account-link" : "nav__account-link nav__account-link_black";

  return (
    <nav className="nav">
      <NavLink to="/movies" className={styleLink} activeClassName="nav__link_active">Фильмы</NavLink>
      <NavLink to="/saved-movies" className={styleLink} activeClassName="nav__link_active">Сохранённые фильмы</NavLink>
      <div className="nav__account">
        <NavLink to="/profile" className={styleAccountLink}>Аккаунт</NavLink>
        <div className="nav__account-img-container">
          <img src={profile} alt="account" className="nav__account-img" />
        </div>
      </div>
    </nav>
  );
}

export default Navigation;