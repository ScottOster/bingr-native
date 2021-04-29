import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from '../config';
import {
  getTopFiveMovies,
  getMovie,
  updateUserProgress,
  deleteGameRoom,
  deleteUsersRoom,
} from '../firebase-api';

export const Result = ({ navigation, route }) => {
  const { roomCode, trackName, finalFilm, users } = route.params;

  const [isLoading, setIsLoading] = useState(true);
  const [topMovie, setTopMovie] = useState(null);
  const [runnersUp, setRunnersUp] = useState([]);

  useEffect(() => {
    updateUserProgress(roomCode, trackName).then(() => {
      console.log('has been updated');
    });
    const unsub = firebase
      .firestore()
      .collection(roomCode)
      .doc(String(finalFilm.id))
      .onSnapshot((snapshot) => {
        console.log(snapshot.data().tally);
        if (snapshot.data().tally >= users.length) {
          console.log(snapshot.data().tally);
          getTopFiveMovies(roomCode)
            .then((topFiveFilms) => {
              setRunnersUp(topFiveFilms.slice(1, 5));
              return getMovie(roomCode, String(topFiveFilms[0].id));
            })
            .then((topMovie) => {
              setTopMovie(topMovie);
              setIsLoading(false);
            });
        }
      });
    return () => {
      console.log('unsubsribinignign,...');
      unsub();
    };
  }, []);

  return isLoading ? (
    <View>
      <Text style={styles.waiting}>Waiting for Players...</Text>
    </View>
  ) : (
    <LinearGradient colors={['#b5e8f7', '#abffea']} style={styles.body}>
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${topMovie.poster_path}`,
          }}
        />
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.button}>
          <LinearGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.0, y: 0.0 }}
            locations={[0.0, 0.74]}
            colors={['#4ac6cd', '#49d695']}
            style={styles.button}
            useAngle={true}
            angle={300}
            angleCenter={{ x: 0.5, y: 0.5 }}>
            <Text style={styles.buttonText}>Play Again</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  loginPage: {
    backgroundColor: 'rgba(235, 235, 235, 0.2)',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    height: '70%',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    borderRadius: 20,
  },
  title: {
    color: '#363636',
    fontSize: 30,
    margin: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  waiting: {
    color: '#363636',
    fontSize: 30,
    margin: 10,
    marginTop: 200,
    textAlign: 'center',
  },
  honourableMentions: {
    color: '#666666',
    fontSize: 18,
    margin: 4,
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
    margin: 2,
  },

  button: {
    width: 270,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    // backgroundColor: '#2C3E50',
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
});
