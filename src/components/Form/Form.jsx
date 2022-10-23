import './Form.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';


function Form({
    title,
    children,
    textButton,
    text,
    textLink,
    link,
    onSubmit,
    isValidForm,
    textError,
  }) {

  const classButton = isValidForm ? "form__button" : "form__button form__button_inactive";

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <Link to='/'>
          <img src={logo} alt="logo" className="form__logo" />
        </Link>
        <h2 className="form__title">{title}</h2>
        <div className="form__container-input">{children}</div>
        <span className="form__error-response">{textError}</span>
        <button
          type="submit"
          name="submit"
          className={classButton}
          disabled={!isValidForm}>
            {textButton}
        </button>
      </form>
      <p className="form__text">{text}
        <Link className="form__link" to={link}>{textLink}</Link>
      </p>
    </>
  );
}

export default Form;