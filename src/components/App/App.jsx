/* eslint-disable react-hooks/exhaustive-deps */
import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Page404 from '../Page404/Page404';
import NavBar from '../NavBar/NavBar';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import './App.css';
import '../Form/Form.css';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Register from '../Register/Register';
import Login from '../Login/Login';

import mainApi from '../../utils/MainApi';

function App() {

  const history = useHistory();

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpenNavBar, setIsOpenNavBar] = useState(false);
  const [resStatus, setResStatus] = useState('');
  const [currentUser, setCurrentUser] = useState({});

  function setUserInfo() {
    mainApi.getUserInfo()
      .then(res => {
        setCurrentUser(res.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    const cookie = localStorage.getItem('hasCookie');
    if (cookie) {
      setUserInfo();
    }
  }, [])

  function handleLogin({ email, password }) {
    mainApi.login({ email, password })
      .then(() => {
        setIsLoggedIn(true);
        setResStatus('');
        setUserInfo();
        localStorage.setItem('hasCookie', true);
        history.push('/');
      })
      .catch((err) => {
        console.log(err);
        setResStatus(err);
    })
  }

  function handleRegistration({ name, email, password }) {
    mainApi.registration({ name, email, password })
      .then(() => {
        handleLogin({ email, password });
        setResStatus('');
      })
      .catch((err) => {
        console.log(err);
        setResStatus(err);
    })
  }

  function handleLogout() {
    mainApi.logout()
      .then(() => {
        setIsLoggedIn(false);
        localStorage.removeItem('hasCookie');
      })
      .catch(err => console.log(err))
  }

  function tokenCheck() {
    const cookie = localStorage.getItem('hasCookie');
    if (cookie) {
      mainApi.getUserInfo()
        .then(() => {
          setUserInfo();
          setIsLoggedIn(true);
          history.push('/');
        })
        .catch(() => localStorage.removeItem('hasCookie'));
    }
  }

  function handleChangeUserInfo({ name, email }) {
    mainApi.changeUserInfo({ name, email })
      .then((res) => {
        setResStatus(200);
        setCurrentUser(res.data)
      })
      .catch(err => {
        console.log(err);
        setResStatus(err);
      })
  }

  useEffect(() => {
    tokenCheck();
  }, [isLoggedIn])

  function handleNavBar() {
    setIsOpenNavBar(!isOpenNavBar);
  }

  function handleResStatus() {
    setResStatus('');
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="root">
        <Switch>
          <Route exact path='/' >
            <Header
              isLoggedIn={isLoggedIn}
              onOpenNavBar={handleNavBar} />
            <Main />
            <Footer />
          </Route>
          <ProtectedRoute
            path='/profile'
            isLoggedIn={isLoggedIn}
            children={(
              <>
                <Header
                  isLoggedIn={isLoggedIn}
                  onOpenNavBar={handleNavBar} />
                <Profile
                logout={handleLogout}
                resStatus={resStatus}
                setResStatus={handleResStatus}
                onEditProfile={handleChangeUserInfo} />
              </>
            )} />
          <ProtectedRoute
            path='/movies'
            isLoggedIn={isLoggedIn}
            children={(
              <>
                <Header
                  isLoggedIn={isLoggedIn}
                  onOpenNavBar={handleNavBar} />
                  <Movies />
                <Footer />
              </>
            )} />
          <ProtectedRoute
            path='/saved-movies'
            isLoggedIn={isLoggedIn}
            children={(
              <>
                <Header
                  isLoggedIn={isLoggedIn}
                  onOpenNavBar={handleNavBar} />
                  <SavedMovies />
                <Footer />
              </>
            )} />
          <Route path="/signup" >
            <Register
              onRegistration={handleRegistration}
              resStatus={resStatus} />
          </Route>
          <Route path="/signin">
            <Login
              onLoggedIn={handleLogin}
              resStatus={resStatus} />
          </Route>
          <Route path='*'>
            <Page404 />
          </Route>
        </Switch>
        <NavBar
          isOpen={isOpenNavBar}
          onClose={handleNavBar} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
