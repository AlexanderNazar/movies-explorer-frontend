import './PortfolioLink.css';

function PortfolioLink({ title, link }) {
  return (
    <a href={link} className="portfolio-link__container" target="_blank" rel="noreferrer">
      <h3 className="portfolio-link__link">{title}</h3>
      <p className="portfolio-link__arrow">↗</p>
    </a>
  )
}

export default PortfolioLink;
