import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import firebase from '../config';
import { getTopFiveMovies, getMovie } from '../firebase-api';

export const Result = ({ navigation, route }) => {
  const { roomCode, trackName, currentFilm } = route.params;

  const [isLoading, setIsLoading] = useState(true);
  const [topMovie, setTopMovie] = useState();
  const [runnersUp, setRunnersUp] = useState([]);

  const changes = (totalPlayers) => {
    firebase
      .firestore()
      .collection(roomCode)
      .doc(String(currentFilm.id))
      .onSnapshot((snapshot) => {
        if (snapshot.data().tally >= totalPlayers) {
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
  };

  useEffect(() => {
    changes(1);
  }, []);

  return isLoading ? (
    <View>
      <Text>Waitinf for Players...</Text>
    </View>
  ) : (
    <View>
      <Text>Top Pick</Text>
      <Text>{topMovie.title}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${topMovie.poster_path}`
        }}
      />
      <Text>Honourable mentions</Text>
      {runnersUp.map((film) => {
        return <Text key={film.id}>{film.title}</Text>;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  tinyLogo: {
    width: 50,
    height: 50
  },
  logo: {
    width: 66,
    height: 58
  }
});

//if one or more of the movies has full votes, randomly choose one and render as top choice
//render list of top 5 choices
//set posterpath into state
//render poster in return
