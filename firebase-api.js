import firebase from './config';

const db = firebase.firestore();

export const getMovie = (roomCode) => {
  const roomRef = db.collection('HB70').doc('115');
  return roomRef.get().then((doc)=>{
    console.log(doc.data())
  })
  // try {
  //   const doc = await roomRef.get();
  //   if (doc.exists) {
  //     return doc.data()
  //   } else {
  //     console.log('Not here');
  //   }
  // } catch (err) {
  //   console.log('Error: ', err);
  // }
};

// export const incrementVote = (roomCode, filmId) => {
//   const roomRef = db.document(`${roomCode}/movies`);
//   return roomRef.get().then((doc) => {
//     return doc.data();
//   });
// };
// const roomCollectionRef = db.collection('TWUT');
// const increment = firebase.firestore.FieldValue.increment(1);

// export const updateVotesCount = () => {
//   roomCollectionRef.doc('233').update({ vote_count: increment });
// };
// const room = roomRef.doc('jHFSqPX1THcjpuGoeejc');

// export const updateVotes = () => {
//   room.update({ votes: 99 });
// };