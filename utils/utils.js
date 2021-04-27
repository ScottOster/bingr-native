export const filterByGenreId = (genreIds, { data }) => {
  const matchingMovies = data.results.filter((movie) => {
    if (
      movie.genre_ids.some((id) => {
        return genreIds.includes(id);
      })
    ) {
      return movie;
    }
  });
  return matchingMovies;
};

export const providersByMovieId = (providers) => {
  const providerIds = [];
  /*eslint-disable*/
  if (providers.data.results.hasOwnProperty('GB')) {
    if (providers.data.results.GB.hasOwnProperty('flatrate')) {
      /*eslint-enable*/
      providers.data.results.GB.flatrate.forEach((provider) => {
        providerIds.push(provider.provider_id);
      });
    }
  }
  return providerIds;
};

export const compareProviderIdLists = (chosenProviders, availableProviders) => {
  let match = false;
  chosenProviders.forEach((chosenProviderId) => {
    availableProviders.some((availableProviderId) => {
      if (chosenProviderId === availableProviderId) {
        match = true;
      }
    });
  });
  return match;
};

export const formatGamesRoomMovies = (unformattedMovies) => {
  const formattedMovies = [];

  unformattedMovies.forEach((movie) => {
    formattedMovies.push({
      id: movie.id,
      title: movie.title,
      up_votes: 0,
      votes_tally: 0,
    });
  });

  return formattedMovies;
};

export const sortMoviesByVotes = (movieList) => {
  const movieListCopy = [...movieList];
  movieListCopy.sort((a, b) => {
    if (a.up_votes < b.up_votes) {
      return 1;
    } else if (a.up_votes > b.up_votes) {
      return -1;
    } else {
      return 0;
    }
  });
  return movieListCopy.splice(0, 5);
};
