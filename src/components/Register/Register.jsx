import './Register.css';
import Form from '../Form/Form';

function Register({
  name,
  email,
  password,
  handleLoggedIn,
  handleChangeName,
  handleChangeEmail,
  handleChangePassword,
  isValidName,
  isValidEmail,
  isValidPassword }) {

  const validTextName = isValidName ? "" : "Имя должно быть не короче 2 символов";
  const validTextEmail = isValidEmail ? "" : "Здесь должен быть E-mail";
  const validTextPassword = isValidPassword ? "" : "Пароль должен быть не короче 8 символов";

  const classPassword = `form__input ${!isValidPassword && "form__input_error"}`;

return (
  <section className="register">
    <Form
    title="Добро пожаловать!"
    textButton="Зарегистрироваться"
    text="Уже зарегистрированы?"
    textLink="Войти"
    link="/signin"
    onLoggedIn={handleLoggedIn}
    children={(
      <>
        <label htmlFor="name" className="form__input-label">Имя</label>
        <input
          className="form__input"
          type="text"
          id="name"
          name="name"
          value={name || ''}
          required
          placeholder="Имя"
          minLength="2"
          onChange={handleChangeName} />
        <span id="name-error" className="form__error">{validTextName}</span>
        <label htmlFor="email" className="form__input-label">E-mail</label>
        <input
          className="form__input"
          type="email"
          id="email"
          name="email"
          value={email || ''}
          required
          placeholder="Email"
          onChange={handleChangeEmail} />
        <span id="email-error" className="form__error">{validTextEmail}</span>
        <label htmlFor="password" className="form__input-label">Пароль</label>
        <input
          className={classPassword}
          type="password"
          id="password"
          name="password"
          value={password || ''}
          required
          placeholder="Пароль"
          minLength="8"
          onChange={handleChangePassword} />
        <span id="password-error" className="form__error">{validTextPassword}</span>
      </>
    )}/>
  </section>
  );
}

export default Register;