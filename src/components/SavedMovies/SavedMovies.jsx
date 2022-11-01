import { useEffect,useState } from 'react';
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies({
  onSearch,
  isLoading,
  cards,
  savedMovies,
  getSavedMovies,
  setResStatus,
  onDislike,
  resStatus,
  onRenderCard }) {

    const [textSearch, setTextSearch] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    function handleTextSearch(text) {
      setTextSearch(text)
    }

    function handleChecked(isChecked) {
      setIsChecked(isChecked)
    }

    useEffect(() => {
      getSavedMovies();
  }, [])

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
          isVisibleButton={false}
          textSearch={textSearch}
          onLike={onDislike}
          onRenderCard={onRenderCard} /> }
  </>
  );
}

export default SavedMovies;