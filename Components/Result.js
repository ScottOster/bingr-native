import React, { useState, useEffect } from 'react';
import firebase from '../config';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { getTopFiveMovies, getMovie } from '../firebase-api';

export const Result = () => {
  const [topFive, setTopFive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topMovie, setTopMovie] = useState();

  const changes = (totalPlayers) => {
    firebase
      .firestore()
      .collection('OFRJ')
      .doc('808')
      .onSnapshot((snapshot) => {
        console.log(totalPlayers, 'TPLAYERS VAR');
        if (snapshot.data().tally >= totalPlayers) {
          getTopFiveMovies('OFRJ')
            .then((topFiveFilms) => {
              setTopFive(topFiveFilms);
              return getMovie('OFRJ', String(topFiveFilms[0].id));
            })
            .then((topMovie) => {
              setTopMovie(topMovie);
              setIsLoading(false)
            });
          console.log('voting finished');
          return true
        }
      });
  };
  
  useEffect(() => {
    changes(105)
  }, []);

  
  return isLoading ? (
    <View>
      <Text>Waitinf for Players...</Text>
    </View>
  ) : (
    <View>
      <Text>Top Pick</Text>
      <Text>{topFive[0].title}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${topMovie.poster_path}`,
        }}
      />
      <Text>Honourable mentions</Text>
      <Text>{topFive[1].title}</Text>
      <Text>{topFive[2].title}</Text>
      <Text>{topFive[3].title}</Text>
      <Text>{topFive[4].title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

//if one or more of the movies has full votes, randomly choose one and render as top choice
//render list of top 5 choices
//set posterpath into state
//render poster in return
