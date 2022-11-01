import { useEffect, useState } from 'react';
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies({
  onSearch,
  isLoading,
  cards,
  getSavedMovies,
  savedMovies,
  renderedFoundCards,
  amountRenderedCards,
  setResStatus,
  resStatus,
  isVisibleButton,
  onLike,
  onRenderCard }) {

  const foundCardsLocalStorage = JSON.parse(localStorage.getItem('foundCards'));
  const textLocalStorage = localStorage.getItem('textSearch');

  function isCheckedLocalStorage() {
    if (localStorage.getItem('isChecked')) {
      return JSON.parse(localStorage.getItem('isChecked'));
    } return false;
  }

  const [textSearch, setTextSearch] = useState(textLocalStorage || '');
  const [isChecked, setIsChecked] = useState(isCheckedLocalStorage());

  function handleTextSearch(text) {
    setTextSearch(text)
  }

  function handleChecked(isChecked) {
    setIsChecked(isChecked)
  }

  useEffect(() => {
    if (foundCardsLocalStorage) {
      renderedFoundCards(foundCardsLocalStorage);
      getSavedMovies();
    }
  }, [amountRenderedCards])

  return (
    <>
      <SearchForm
        onSearch={onSearch}
        textSearch={textSearch}
        handleTextSearch={handleTextSearch}
        isChecked={isChecked}
        onChecked={handleChecked}/>
      { isLoading ?
          <Preloader />
          :
          <MoviesCardList
            cards={cards}
            savedMovies={savedMovies}
            setResStatus={setResStatus}
            resStatus={resStatus}
            isVisibleButton={isVisibleButton}
            textSearch={textSearch}
            onLike={onLike}
            onRenderCard={onRenderCard} /> }
    </>
  );
}

export default Movies;