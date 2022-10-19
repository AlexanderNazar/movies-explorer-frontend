import { Link } from 'react-router-dom'
import './NavAuth.css';

function NavAuth() {
  return (
    <div className="nav-auth">
      <Link to="/signup">
        <button className="nav-auth__register">Регистрация</button>
      </Link>
      <Link to="/signin">
        <button className="nav-auth__login">Войти</button>
      </Link>
    </div>
  );
}

export default NavAuth;