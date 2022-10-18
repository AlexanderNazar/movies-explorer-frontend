import './Footer.css'

function Footer() {

return (
  <section className="footer">
    <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <nav className="footer__nav">
      <a href="https://practicum.yandex.ru/" className="footer__link" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
      <a href="https://github.com/AlexanderNazar" className="footer__link" target="_blank" rel="noreferrer">Github</a>
    </nav>
    <p className="footer__year">©2020</p>
  </section>
  );
}

export default Footer;