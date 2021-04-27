import firebase from './config';

export const changes = (totalPlayers) => {
  firebase
    .firestore()
    .collection('OFRJ')
    .doc('808')
    .onSnapshot((snapshot) => {
      // console.log(totalPlayers, 'TPLAYERS VAR');
      if (snapshot.data().tally === totalPlayers) {
        // setIsLoading(false);
        console.log('voting finished');
        return true;
      }
      // console.log(snapshot.data().tally);
      // const data = snapshot.docChanges()
    });
};
