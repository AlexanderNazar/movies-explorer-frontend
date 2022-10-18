import './TitleSection.css';

function TitleSection({ title }) {
  return (
    <div className="title-section">
      <h2 className="title-section__text">{title}</h2>
    </div>
  );
}

export default TitleSection;