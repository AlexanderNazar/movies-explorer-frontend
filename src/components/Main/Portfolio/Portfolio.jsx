import PortfolioLink from './PortfolioLink/PortfolioLink';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <PortfolioLink title="Статичный сайт" link="https://alexandernazar.github.io/how-to-learn/" />
      <PortfolioLink title="Адаптивный сайт" link="https://alexandernazar.github.io/russian-travel/#" />
      <PortfolioLink title="Одностраничное приложение" link="https://nazarov.front.nomorepartiesxyz.ru/" />
    </section>
  );
}

export default Portfolio;
