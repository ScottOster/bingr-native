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

export const updateVotesCount = async (roomCode, movieId) => {
  await db.collection(roomCode).doc(movieId).update({ increment_votes: increment });
};

export const updateVoters = async (roomCode, voterName, movieId) => {
  const movieRef = db.collection(String(roomCode)).doc(String(movieId));
  await movieRef.update({
    voters: firebase.firestore.FieldValue.arrayUnion(voterName),
  });
};

export const updateVotesTally = async (roomCode, movieId) => {
  await db.collection(roomCode).doc(movieId).update({ tally: increment });
};

export const createUserRoom = (roomCode, hostName) => {
  db.collection(`${roomCode}users`).doc(hostName).set({ name: hostName });
};

export const updateUserProgress = async (roomCode, userName) => {
  await db.collection(`${roomCode}users`).doc(userName).update({ isFinished: true });
};

export const checkUserProgress = async (roomCode) => {
  const snapshot = await db.collection(`${roomCode}users`).get();
  let truthy = false;
  snapshot.forEach((user) => {
    if (user.data().isFinished) {
      truthy = true;
    }
  });
  return truthy;
};

export const addUserToRoom = async (roomCode, userName) => {
  const snapshot = await db.collection(`${roomCode}users`).get();
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

export const checkRoomExists = async (roomCode) => {
  const snapshot = await db.collection(roomCode).get();
  if (snapshot.empty) {
    return true;
  } else {
    return false;
  }
};

export const checkUserExists = async (roomCode, userName) => {
  const snapshot = await db.collection(`${roomCode}users`).get();
  if (snapshot.empty) return false;
  else {
    let truthy = false;
    snapshot.forEach((user) => {
      if (user.data().name === userName) truthy = true;
    });
    return truthy;
  }
};

export const joinRoomErrorChecker = (roomCode, userName) => {
  return Promise.all([
    checkRoomExists(roomCode),
    checkUserExists(roomCode, userName),
    checkUserProgress(roomCode),
  ]).then((values) => {
    return values;
  });
};
