import { fetchTopMovies, fetchMovieById } from './movie-api';
import { filterByGenreId, providersByMovieId, compareProviderIdLists } from './utils/utils';
// TODO:
// needs to take genreIds as array (needs refactor)
// needs to take chosenProviders as array
// ideally should take to take film list
export const initiateMovieList = (chosenProviders, chosenCategories) => {
  const movieList = [];
  const createMovieList = (pageNumber = 1) => {
    return fetchTopMovies(pageNumber)
      .then((res) => {
        const moviesByGenreId = filterByGenreId(chosenCategories, res);
        const moviePromises = moviesByGenreId.map((movie) => {
          return fetchMovieById(movie.id);
        });
        return Promise.all([moviesByGenreId, ...moviePromises]);
      })
      .then((tempMovieList) => {
        const moviesByGenreId = tempMovieList.shift();
        const finalFilter = moviesByGenreId.filter((movie, index) => {
          const availableProviders = providersByMovieId(tempMovieList[index]);
          if (
            movie.id === tempMovieList[index].data.id &&
            compareProviderIdLists(chosenProviders, availableProviders)
          ) {
            return movie;
          }
        });
        finalFilter.forEach((movie) => {
          movieList.push(movie);
        });
        if (movieList.length < 20) {
          return createMovieList(pageNumber + 1);
        } else {
          return movieList;
        }
      });
  };
  return createMovieList();
};
