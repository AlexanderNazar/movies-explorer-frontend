import './Form.css';
import logo from '../../images/logo.svg';
import { Link, useHistory } from 'react-router-dom';


function Form({ title, children, textButton, text, textLink, link, onLoggedIn }) {

  const history = useHistory();

  function handleSubmit(evt) {
    evt.preventDefault();
    onLoggedIn();
    history.push('/');
  }

return (
  <>
    <form className="form" onSubmit={handleSubmit}>
      <Link to='/'>
        <img src={logo} alt="logo" className="form__logo" />
      </Link>
      <h2 className="form__title">{title}</h2>
      <div className="form__container-input">{children}</div>
      <button
        type="submit"
        name="submit"
        className="form__button">{textButton}
      </button>
    </form>
    <p className="form__text">{text}
      <Link className="form__link" to={link}>{textLink}</Link>
    </p>
  </>
  );
}

export default Form;