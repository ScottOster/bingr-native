import React, { useState, useEffect } from 'react';
import { getTopFiveMovies, getMovie } from '../firebase-api';
import { StyleSheet, View, Text, Image, Button } from 'react-native';

export const Result = () => {
  const [topFive, setTopFive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [topMovie, setTopMovie] = useState();

  useEffect(() => {
    getTopFiveMovies('HB7O')
      .then((topFiveFilms) => {
        setTopFive(topFiveFilms);
        return getMovie('HB7O', String(topFiveFilms[0].id));
      })
      .then((topMovie) => {
        setTopMovie(topMovie);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <View>
      <Text>Page is loading</Text>
    </View>
  ) : (
    <View>
      <Text>Top Pick</Text>
      <Text>{topFive[0].title}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: `https://image.tmdb.org/t/p/w500${topMovie.poster_path}`
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
