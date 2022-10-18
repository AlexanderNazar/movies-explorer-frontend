import TitleSection from '../TitleSection/TitleSection';
import './AboutProject.css';

function AboutProject() {
  return (
    <section className="about-project" id="about-project">
      <TitleSection title="О проекте" />
      <div className="about-project__section-text">
        <article className="about-project__article">
          <h3 className="about-project__article-title">Дипломный проект включал 5 этапов</h3>
          <p className="about-project__article-text">
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </p>
        </article>
        <article className="about-project__article">
          <h3 className="about-project__article-title">На выполнение диплома ушло 5 недель</h3>
          <p className="about-project__article-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
          </p>
        </article>
      </div>
      <div className="about-project__graph">
        <div className="about-project__graph-week about-project__graph-week_backend">
          <p className="about-project__graph-text">1 неделя</p>
        </div>
        <div className="about-project__graph-week">
          <p className="about-project__graph-text">4 недели</p>
        </div>
        <p className="about-project__graph-label">Back-end</p>
        <p className="about-project__graph-label">Front-end</p>
      </div>
    </section>
  );
}

export default AboutProject;