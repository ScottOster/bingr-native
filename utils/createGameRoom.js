import firebase from '../config';
export const createGameRoom = (code, bigMovieData) => {
  bigMovieData.forEach((movie) => {
    const {
      adult,
      backdrop_path,
      genre_ids,
      id,
      original_title,
      original_language,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
    } = movie;

    firebase.firestore().collection(code).doc(id.toString()).set({
      voters: [],
      adult,
      backdrop_path,
      genre_ids,
      id,
      original_title,
      original_language,
      overview,
      popularity,
      poster_path,
      release_date,
      title,
      video,
      vote_average,
      vote_count,
      increment_votes: 0,
      tally: 0,
    });
  });
};
