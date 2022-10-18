import './Profile.css';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function Profile({ onLoggedIn }) {

  const history = useHistory();

  const [name, setName] = useState('Александр');
  const [email, setEmail] = useState('naa@oplot48.ru');
  const [onEdit, setOnEdit] = useState(false);

  function handleChangeName(evt) {
    setName(evt.target.value);
  }

  function handleChangeEmail(evt) {
    setEmail(evt.target.value);
  }

  function handleEditAccount() {
    setOnEdit(!onEdit);
  }

  function handleExitAccount() {
    onLoggedIn();
    history.push('/');
  }

return (
  <section className="profile">
    <h2 className="profile__title">Привет, Александр!</h2>
    { onEdit ?
      <>
        <form  className="profile__form">
          <div className="profile__input-cotainer">
            <label htmlFor="name" className="profile__input-label">Имя</label>
              <input
                className="profile__input"
                type="text"
                name="name"
                id="name"
                value={name || ''}
                onChange={handleChangeName}
                placeholder="Имя"
                minLength="2" />
          </div>
          <div className="profile__input-cotainer">
            <label htmlFor="email" className="profile__input-label">E-mail</label>
              <input
                className="profile__input"
                type="email"
                name="email"
                id="email"
                value={email || ''}
                onChange={handleChangeEmail}
                placeholder="E-mail" />
          </div>
          <button
            type="submit"
            name="save"
            onClick={handleEditAccount}
            className="profile__button-save">Сохранить
          </button>
        </form>
      </>
      :
      <>
        <form  className="profile__form">
          <div className="profile__input-cotainer">
            <label htmlFor="name" className="profile__input-label">Имя</label>
              <input
                className="profile__input"
                type="text"
                name="name"
                id="name"
                value={name || ''}
                onChange={handleChangeName}
                placeholder="Имя"
                minLength="2"
                disabled />
          </div>
          <div className="profile__input-cotainer">
            <label htmlFor="email" className="profile__input-label">E-mail</label>
              <input
                className="profile__input"
                type="email"
                name="email"
                id="email"
                value={email || ''}
                onChange={handleChangeEmail}
                placeholder="E-mail"
                disabled />
          </div>
        </form>
        <button
          type="button"
          name="edit"
          onClick={handleEditAccount}
          className="profile__button-edit">Редактировать
        </button>
        <button
          type="button"
          name="exit"
          onClick={handleExitAccount}
          className="profile__button-exit">Выйти из аккаунта
        </button>
      </>
    }
</section>
  );
}

export default Profile;