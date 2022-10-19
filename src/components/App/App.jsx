import { Route, Switch, useLocation  } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Page404 from '../Page404/Page404';
import NavBar from '../NavBar/NavBar';

import './App.css';
import '../Form/Form.css';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';

function App() {

  const location = useLocation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [isOpenNavBar, setIsOpenNavBar] = useState(false);

  function handleChangeName(evt) {
    setName(evt.target.value);
    setIsValidName(evt.target.validity.valid);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
    setIsValidEmail(evt.target.validity.valid);
  }

  function handleChangePassword(evt) {
    setPassword(evt.target.value);
    setIsValidPassword(evt.target.validity.valid);
  }

  function handleLoggedIn() {
    setIsLoggedIn(!isLoggedIn);
  }

  function handleNavBar() {
    setIsOpenNavBar(!isOpenNavBar);
  }

  useEffect(() => {
    setName('');
    setEmail('');
    setPassword('');
    setIsValidName(true);
    setIsValidEmail(true);
    setIsValidPassword(true);
  }, [location]);



  return (
    <div className="root">
      <Switch>
        <Route exact path='/' >
          <Header
            isLoggedIn={isLoggedIn}
            onOpenNavBar={handleNavBar} />
          <Main />
          <Footer />
        </Route>
        <Route path='/profile' >
          <Header
            isLoggedIn={isLoggedIn}
            onOpenNavBar={handleNavBar} />
          <Profile onLoggedIn={handleLoggedIn} />
        </Route>
        <Route path='/movies' >
          <Header
            isLoggedIn={isLoggedIn}
            onOpenNavBar={handleNavBar} />
            <Movies />
          <Footer />
        </Route>
        <Route path='/saved-movies' >
          <Header
            isLoggedIn={isLoggedIn}
            onOpenNavBar={handleNavBar} />
            <SavedMovies />
          <Footer />
        </Route>
        <Route path="/signup" >
          <Register
            name={name}
            email={email}
            password={password}
            handleLoggedIn={handleLoggedIn}
            handleChangeName={handleChangeName}
            handleChangeEmail={handleChangeEmail}
            handleChangePassword={handleChangePassword}
            isValidName={isValidName}
            isValidEmail={isValidEmail}
            isValidPassword={isValidPassword} />
        </Route>
        <Route path="/signin">
          <Login
              email={email}
              password={password}
              handleLoggedIn={handleLoggedIn}
              handleChangeEmail={handleChangeEmail}
              handleChangePassword={handleChangePassword}
              isValidEmail={isValidEmail}
              isValidPassword={isValidPassword} />
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
      <NavBar
        isOpen={isOpenNavBar}
        onClose={handleNavBar} />
    </div>
  );
}

export default App;
