import firebase from '../config';
export const createGameRoom = (code, bigMovieData) => {
  const newCollection = firebase.firestore().collection(code);
  bigMovieData.forEach((movie, index) => {
    const movieId = bigMovieData[index].id;
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
    } = bigMovieData[index];

    firebase.firestore().collection(code).doc(movieId.toString()).set({
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
