import { useEffect } from 'react';
import Form from '../Form/Form';
import useForm from '../../hooks/useForm';

function Register({ onRegistration, resStatus, isLoading }) {

  const {
    values,
    isValid,
    isValidForm,
    handleChange,
    resetForm,
  } = useForm();

  function handleSubmit(evt) {
    evt.preventDefault();
    onRegistration(values);
  }

  useEffect(() => {
    return () => {
      resetForm();
    }
  }, [])

  const validTextName = !isValid.name && "Введен недопустимый символ для имени";
  const validTextEmail = !isValid.email && "Здесь должен быть E-mail";
  const validTextPassword = !isValid.password && "Пароль не должен быть короче 8 символов";

  const classPassword = `form__input ${!isValid.password && "form__input_error"}`;

  const errorTextBadRequest = resStatus === 400 && "При регистрации пользователя произошла ошибка";
  const errorTextConflict = resStatus === 409 && "Пользователь с таким email уже существует";
  const errorTextInternalServer = resStatus === 500 && "На сервере произошла ошибка";
  const errorTextResponse = errorTextBadRequest || errorTextConflict || errorTextInternalServer;


  return (
    <section className="register">
      <Form
        title="Добро пожаловать!"
        textButton="Зарегистрироваться"
        text="Уже зарегистрированы?"
        textLink="Войти"
        link="/signin"
        onSubmit={handleSubmit}
        textError={errorTextResponse}
        isValidForm={isValidForm}
        isLoading={isLoading}
        children={(
          <>
            <label htmlFor="name" className="form__input-label">Имя</label>
            <input
              className="form__input"
              type="text"
              id="name"
              name="name"
              value={values.name || ''}
              pattern="[a-zA-Zа-яёА-Я0-9\s\-]*"
              required
              placeholder="Имя"
              onChange={handleChange}
              disabled={!isLoading} />
            <span id="name-error" className="form__error">{validTextName}</span>
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
        )} />
    </section>
  );
}

export default Register;