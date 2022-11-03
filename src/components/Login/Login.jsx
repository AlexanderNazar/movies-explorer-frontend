import { useEffect } from 'react';
import Form from '../Form/Form';
import useForm from '../../hooks/useForm';

function Login({ onLoggedIn, resStatus, isLoading }) {

  const {
    values,
    isValid,
    isValidForm,
    handleChange,
    resetForm,
  } = useForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    onLoggedIn(values);
  }

  useEffect(() => {
    return () => {
      resetForm();
    }
  }, [])

  const validTextEmail = !isValid.email && "Здесь должен быть E-mail";
  const validTextPassword = !isValid.password && "Пароль должен быть не короче 8 символов";

  const classPassword = `form__input ${!isValid.password && "form__input_error"}`;

  const errorTextUnauthorised = resStatus === 401 && "Вы ввели неправильный логин или пароль";
  const errorTextInternalServer = resStatus === 500 && "На сервере произошла ошибка";
  const errorTextResponse = errorTextUnauthorised || errorTextInternalServer;

  return (
    <section className="login">
      <Form
        title="Рады видеть!"
        textButton="Войти"
        text="Ещё не зарегистрированы?"
        textLink="Регистрация"
        link="/signup"
        isValidForm={isValidForm}
        textError={errorTextResponse}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        children={(
          <>
            <label htmlFor="email" className="form__input-label">E-mail</label>
            <input
              className="form__input"
              type="email"
              id="email"
              name="email"
              value={values.email || ''}
              required
              placeholder="Email"
              onChange={handleChange}
              disabled={!isLoading} />
            <span id="email-error" className="form__error">{validTextEmail}</span>
            <label htmlFor="password" className="form__input-label">Пароль</label>
            <input
              className={classPassword}
              type="password"
              id="password"
              name="password"
              value={values.password || ''}
              required
              placeholder="Пароль"
              minLength="8"
              onChange={handleChange}
              disabled={!isLoading} />
            <span id="password-error" className="form__error">{validTextPassword}</span>
          </>
        )}/>
    </section>
  );
}

export default Login;