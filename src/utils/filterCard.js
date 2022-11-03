
function filterCard(cards, valueSearch, short) {
  const entryRU = cards.filter(card => card.nameRU.toLowerCase().includes(valueSearch.toLowerCase()));
  const entryEN = cards.filter(card => card.nameEN.toLowerCase().includes(valueSearch.toLowerCase()));
  const entryDescription = cards.filter(card => card.description.toLowerCase().includes(valueSearch.toLowerCase()));
  const entryDirector = cards.filter(card => card.director.toLowerCase().includes(valueSearch.toLowerCase()));
  const entryYear = cards.filter(card => card.year.includes(valueSearch));

  const generalResponse = entryRU.concat(entryEN);

  const shortMovies = generalResponse.filter(card => card.duration < 40);

  if (short) {
    return [...new Set(shortMovies)]
  }
  return [...new Set(generalResponse)];
}

export default filterCard;