import TitleSection from '../TitleSection/TitleSection';
import './Techs.css';


function Techs() {
  return (
    <section className="techs" id="techs">
      <TitleSection title="Технологии" />
      <h3 className="techs__title">7 технологий</h3>
      <p className="techs__description">
        На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
      </p>
      <ul className="techs__array">
        <li className="techs__cell">HTML</li>
        <li className="techs__cell">CSS</li>
        <li className="techs__cell">JS</li>
        <li className="techs__cell">React</li>
        <li className="techs__cell">Git</li>
        <li className="techs__cell">Express.js</li>
        <li className="techs__cell">MongoDB</li>
      </ul>
    </section>
  );
}

export default Techs;
