import { Link, useRouteMatch } from 'react-router-dom'
import NavAuth from "./NavAuth/NavAuth";
import logo from '../../images/logo.svg';
import MediaQuery from 'react-responsive'
import './Header.css';
import Navigation from '../Navigation/Navigation';

function Header({ isLoggedIn, onOpenNavBar }) {

  const { path } = useRouteMatch();

  const styleHeader = path === '/' ? "header" : "header header_white";
  const navFromLoggedIn = isLoggedIn ? <Navigation /> : <NavAuth />;
  const navFromLoggedInHomePage = isLoggedIn ? <button className="header__nav header__nav_white" onClick={onOpenNavBar}/> : <NavAuth />;
  const navFromLoggedInAndSize = path === '/' ? navFromLoggedInHomePage : <button className="header__nav" onClick={onOpenNavBar}/>;

  return (
    <header className={styleHeader}>
      <MediaQuery maxWidth={1023}>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        {navFromLoggedInAndSize}
      </MediaQuery>
      <MediaQuery minWidth={1024}>
        <Link to="/">
          <img src={logo} alt="logo" className="logo" />
        </Link>
        {navFromLoggedIn}
      </MediaQuery>
    </header>
  );
}

export default Header;
