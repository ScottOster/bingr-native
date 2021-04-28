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
  return db
    .collection(roomCode)
    .doc(movieId)
    .update({ increment_votes: increment })
    .then(() => {
      console.log('doc updated');
    });
};

export const updateVotesTally = (roomCode, movieId) => {
  return db
    .collection(roomCode)
    .doc(movieId)
    .update({ tally: increment })
    .then(() => {
      console.log('doc updated');
    });
};

export const createUserRoom = (roomCode, hostName) => {
  return db
    .collection(`${roomCode}users`)
    .doc(hostName)
    .set({ name: hostName })
    .then(() => {
      console.log('user room created');
    });
};

export const addUserToRoom = async (roomCode, userName) => {
  const snapshot = await db.collection(roomCode).get();
  if (snapshot.empty) {
    return false;
  } else {
    db.collection(`${roomCode}users`).doc(userName).set({ name: userName });
    return true;
  }
};

export const getUsersByRoomCode = async (roomCode) => {
  const snapshot = await db.collection(`${roomCode}users`).get();
  if (snapshot.empty) {
    console.log('no users in this collection');
  } else {
    const users = [];
    snapshot.forEach((user) => {
      users.push(user.data());
    });
    return users;
  }
};
