import { useLocation } from 'react-router-dom';
import './MoviesCard.css';
import heart from '../../images/heart.svg';
import heart_active from '../../images/heart-active.svg';
import cross from '../../images/cross.svg';

function MoviesCard({ img, name, duration, like, trailerLink, onLike, card }) {

  const { pathname } = useLocation();

  const isLikeActive = like ? heart_active : heart;

  function handleCardLike() {
    onLike(card);
  }

  return (
    <div className="card">
      <a href={trailerLink} className="card__link-trailer" target="_blank" rel="noreferrer">
        <img src={img} alt={`Баннер фильма ${name}`} className="card__img" />
      </a>
      <h2 className="card__name">{name}</h2>
        {pathname === '/movies' ?
          <button className="card__button" type="button" onClick={handleCardLike} >
            <img src={isLikeActive} alt="#" className="card__heart" />
          </button>
          :
          <button className="card__button" type="button" onClick={handleCardLike} >
            <img src={cross} alt="#" className="card__heart" />
          </button>
        }
      <p className="card__duration">{duration}</p>
    </div>
  );
}

export default MoviesCard;