import './MoviesCard.css';
import heart from '../../images/heart.svg';
import heart_active from '../../images/heart-active.svg';

function MoviesCard({ img, name, duration, like }) {

  const isLikeActive = like ? heart : heart_active;

  return (
    <div className="card">
      <img src={img} alt="#" className="card__img" />
      <h2 className="card__name">{name}</h2>
      <button className="card__button" type="button" >
        <img src={isLikeActive} alt="#" className="card__heart" />
      </button>
      <p className="card__duration">{duration}</p>
    </div>
  );
}

export default MoviesCard;