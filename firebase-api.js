import firebase from './config';
import { sortMoviesByVotes } from './utils/utils';

const db = firebase.firestore();

export const getMovie = (roomCode, filmId) => {
  const roomRef = db.collection(roomCode).doc(filmId);
  return roomRef.get().then((doc) => {
    return doc.data();
  });
};

export const getMovieByPosition = async (roomCode, index) => {
  const roomRef = db.collection(roomCode);
  const snapshot = await roomRef.get();
  if (snapshot.empty) {
    console.log('no matching documents');
  } else {
    return snapshot.docs[index].data();
  }
};

export const getTopFiveMovies = async (roomCode) => {
  const roomRef = db.collection(roomCode);
  const snapshot = await roomRef.get();
  if (snapshot.empty) {
    console.log('no matching documents');
  } else {
    const movies = [];
    snapshot.forEach((doc) => {
      movies.push(doc.data());
    });
    return sortMoviesByVotes(movies);
  }
};

const increment = firebase.firestore.FieldValue.increment(1);

export const updateVotesCount = (roomCode, movieId) => {
  db.collection(roomCode).doc(movieId).update({ increment_votes: increment });
};

export const updateVotesTally = (roomCode, movieId) => {
  db.collection(roomCode).doc(movieId).update({ tally: increment });
};

export const createUserRoom = (roomCode, hostName) => {
  db.collection(`${roomCode}users`).doc(hostName).set({ name: hostName });
};
