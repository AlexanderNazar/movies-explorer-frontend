import Form from '../Form/Form';

function Login({
  email,
  password,
  handleLoggedIn,
  handleChangeEmail,
  handleChangePassword,
  isValidEmail,
  isValidPassword }) {

  const validTextEmail = isValidEmail ? "" : "Здесь должен быть E-mail";
  const validTextPassword = isValidPassword ? "" : "Пароль должен быть не короче 8 символов";

  const classPassword = `form__input ${!isValidPassword && "form__input_error"}`;

return (
  <section className="login">
    <Form
      title="Рады видеть!"
      textButton="Войти"
      text="Ещё не зарегистрированы?"
      textLink="Регистрация"
      link="/signup"
      onLoggedIn={handleLoggedIn}
      children={(
        <>
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

export default Login;