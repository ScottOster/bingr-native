import { testData, providerData, smallerMoviesArray, moviesToSort } from './testData';
import {
  filterByGenreId,
  compareProviderIdLists,
  providersByMovieId,
  formatGamesRoomMovies,
  sortMoviesByVotes,
} from './utils';

describe('filterByGenreId()', () => {
  test('returns an empty array if no matches', () => {
    const expectedOut = [];
    const actualOut = filterByGenreId([1], testData);
    expect(actualOut).toEqual(expectedOut);
  });
  test('returns movies from the genre id 80', () => {
    const expectedOut = [
      {
        adult: false,
        backdrop_path: '/iNh3BivHyg5sQRPP1KOkzguEX0H.jpg',
        genre_ids: [18, 80],
        id: 278,
        original_language: 'en',
        original_title: 'The Shawshank Redemption',
        overview:
          'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
        popularity: 52.964,
        poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        release_date: '1995-02-17',
        title: 'The Shawshank Redemption',
        video: false,
        vote_average: 8.7,
        vote_count: 18766,
      },
      {
        adult: false,
        backdrop_path: '/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
        genre_ids: [18, 80],
        id: 238,
        original_language: 'en',
        original_title: 'The Godfather',
        overview:
          'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
        popularity: 49.615,
        poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        release_date: '1972-08-24',
        title: 'The Godfather',
        video: false,
        vote_average: 8.7,
        vote_count: 14154,
      },
      {
        adult: false,
        backdrop_path: '/6zbKgwgaaCyyBXE4Sun4oWQfQmi.jpg',
        genre_ids: [28, 53, 80],
        id: 615457,
        original_language: 'en',
        original_title: 'Nobody',
        overview:
          'Hutch Mansell, a suburban dad, overlooked husband, nothing neighbor — a "nobody." When two thieves break into his home one night, Hutch\'s unknown long-simmering rage is ignited and propels him on a brutal path that will uncover dark secrets he fought to leave behind.',
        popularity: 502.73,
        poster_path: '/oBgWY00bEFeZ9N25wWVyuQddbAo.jpg',
        release_date: '2021-06-09',
        title: 'Nobody',
        video: false,
        vote_average: 8.6,
        vote_count: 507,
      },
      {
        adult: false,
        backdrop_path: '/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg',
        genre_ids: [18, 80],
        id: 240,
        original_language: 'en',
        original_title: 'The Godfather: Part II',
        overview:
          'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
        popularity: 41.372,
        poster_path: '/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg',
        release_date: '1974-12-20',
        title: 'The Godfather: Part II',
        video: false,
        vote_average: 8.6,
        vote_count: 8446,
      },
      {
        adult: false,
        backdrop_path: '/xMIyotorUv2Yz7zpQz2QYc8wkWB.jpg',
        genre_ids: [14, 18, 80],
        id: 497,
        original_language: 'en',
        original_title: 'The Green Mile',
        overview:
          /*eslint-disable*/
          "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
        /*eslint-enable*/
        popularity: 39.649,
        poster_path: '/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
        release_date: '2000-03-03',
        title: 'The Green Mile',
        video: false,
        vote_average: 8.5,
        vote_count: 12136,
      },
      {
        adult: false,
        backdrop_path: '/w7RDIgQM6bLT7JXtH4iUQd3Iwxm.jpg',
        genre_ids: [53, 80],
        id: 680,
        original_language: 'en',
        original_title: 'Pulp Fiction',
        overview:
          /*eslint-disable*/
          "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        /*eslint-enable*/
        popularity: 39.843,
        poster_path: '/x1QZHSq9AzreIVbsp8VgYemAjV0.jpg',
        release_date: '1994-10-21',
        title: 'Pulp Fiction',
        video: false,
        vote_average: 8.5,
        vote_count: 20949,
      },
      {
        adult: false,
        backdrop_path: '/nMKdUUepR0i5zn0y1T4CsSB5chy.jpg',
        genre_ids: [18, 28, 80, 53],
        id: 155,
        original_language: 'en',
        original_title: 'The Dark Knight',
        overview:
          'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
        popularity: 55.457,
        poster_path: '/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        release_date: '2008-07-24',
        title: 'The Dark Knight',
        video: false,
        vote_average: 8.5,
        vote_count: 24892,
      },
    ];
    const actualOut = filterByGenreId([80], testData);
    expect(actualOut).toEqual(expectedOut);
  });
  test('does not mutate original array', () => {
    const actualOut = filterByGenreId([80], testData);
    expect(actualOut).not.toBe(testData);
  });
});

describe('compareProviderIdLists()', () => {
  test('return true if any providers match', () => {
    const expectedOut = true;
    const actualOut = compareProviderIdLists([8, 31, 167], [9, 21, 8]);
    expect(actualOut).toEqual(expectedOut);
  });
  test('return false if no providers match', () => {
    const expectedOut = false;
    let actualOut = compareProviderIdLists([10, 17], []);
    expect(actualOut).toEqual(expectedOut);
    actualOut = compareProviderIdLists([10, 17], [99, 8, 100]);
    expect(actualOut).toEqual(expectedOut);
  });
});

describe('providersByMovieId()', () => {
  test('return array of provider IDs', () => {
    const actualOut = providersByMovieId(providerData);
    expect(Array.isArray(actualOut)).toBe(true);
  });
  test('return all provider IDs for movie', () => {
    const expectedOut = [8, 31, 339, 167];
    const actualOut = providersByMovieId(providerData);
    expect(actualOut).toEqual(expectedOut);
  });
});

describe('formatGamesRoomMovies', () => {
  test('should return an array when passed an array', () => {
    const expectedOut = [];
    const actualOut = formatGamesRoomMovies([]);
    expect(actualOut).toEqual(expectedOut);
  });

  test('correctly formats array of movies', () => {
    const expectedOut = [
      {
        id: 278,
        title: 'The Shawshank Redemption',
        up_votes: 0,
        votes_tally: 0,
      },
      {
        /*eslint-disable*/
        id: 724089,
        title: "Gabriel's Inferno Part II",
        up_votes: 0,
        votes_tally: 0,
        /*eslint-enable*/
      },
    ];
    const actualOut = formatGamesRoomMovies(smallerMoviesArray);
    expect(actualOut).toEqual(expectedOut);
  });
});
describe.only('sortMoviesByVotes', () => {
  test('gets top 5 movies in array', () => {
    const expected = [
      { title: 'The Shawshank Redemption', id: 278, votes_tally: 5, up_votes: 5 },
      { title: 'The Godfather', up_votes: 5, votes_tally: 5, id: 238 },
      { votes_tally: 5, up_votes: 3, title: 'The Godfather: Part II', id: 240 },
      { votes_tally: 5, up_votes: 2, id: 497, title: 'The Green Mile' },
      { id: 155, votes_tally: 5, up_votes: 1, title: 'The Dark Knight' },
    ];
    const actual = sortMoviesByVotes(moviesToSort);
    expect(actual).toEqual(expected);
  });
});
