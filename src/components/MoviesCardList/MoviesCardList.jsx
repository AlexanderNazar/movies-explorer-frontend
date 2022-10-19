import MoviesCard from '../MoviesCard/MoviesCard';
import cards from '../../constants/cards';
import './MoviesCardList.css';

function MoviesCardList() {

return (
  <>
    <section className="movies-card-list">
      {cards.map(card => (<MoviesCard
        key={card.id}
        img={card.image}
        name={card.name}
        duration={card.duration}
        like={card.like}
      />))}
    </section>
    <div className="movies-card-list__more-films">
      <button className="movies-card-list__more-films-button" type="button">Ещё</button>
    </div>
  </>
  );
}

export default MoviesCardList;

