import firebase from './config';

export const changes = (totalPlayers) => {
  firebase
    .firestore()
    .collection('HB7O')
    .doc('106646')
    .onSnapshot((snapshot) => {
      //console.log(snapshot.data(), 'in snapshot');
      if (snapshot.data().tally === totalPlayers) {
        console.log('voting finished');
      }
      console.log(snapshot.data().tally);
      // const data = snapshot.docChanges()
    });
};
