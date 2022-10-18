import logo_practikum from '../../../images/logo-practikum.svg';
import './Promo.css';


function Promo() {
  return (
    <section className="promo">
      <img src={logo_practikum} alt="logo practicum" className="promo__logo" />
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
    </section>
  );
}

export default Promo;
