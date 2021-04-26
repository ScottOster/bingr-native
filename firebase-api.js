import firebase from './config';

const db = firebase.firestore();

export const getMovie = (roomCode, filmId) => {
  const roomRef = db.collection(roomCode).doc(filmId);
  return roomRef.get().then((doc)=>{
  })
};

export const getMovieByPosition = async (roomCode, index) => {
  const roomRef = db.collection(roomCode)
  const snapshot = await roomRef.get()
  if (snapshot.empty){
    console.log('no matching documents')
    return
  }
  else{
    return (snapshot.docs[index].data())
  }
}


const increment = firebase.firestore.FieldValue.increment(1);

export const updateVotesCount = (roomCode, movieId) => {
  db.collection(roomCode).doc(movieId).update({ increment_votes: increment });
};

export const updateVotesTally = (roomCode, movieId) => {
  db.collection(roomCode).doc(movieId).update({ tally: increment });
};
