import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { updateVotesTally, getMovieByPosition, updateVotesCount } from '../firebase-api';

export const MovieCard = ({ navigation, roomCode }) => {
  const [currentFilm, setCurrentFilm] = useState({});
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    if (counter < 19) {
      setCounter((prevState) => {
        const newState = prevState;
        console.log(newState, 'increment');
        return newState + 1;
      });
    } else {
      // TODO: Sort navigation
      // () => {
      //   navigation.navigate('Result');
      // };
    }
  };

  useEffect(() => {
    const roomCode = 'HB7O';
    getMovieByPosition(roomCode, counter).then((movie) => {
      setCurrentFilm(movie);
    });
  }, [counter]);

  const { title, vote_average, overview, poster_path, id } = currentFilm;

  return (
    <View>
      <Text>{title}</Text>
      <Text>{vote_average}</Text>
      <Text>{overview}</Text>
      <Image
        style={styles.tinyLogo}
        source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
      />
      <Button
        title="cringr"
        onPress={() => {
          incrementCounter();
          updateVotesTally('HB7O', String(id));
        }}
      />
      <Button
        title="bingr"
        onPress={() => {
          incrementCounter();
          updateVotesTally('HB7O', String(id));
          updateVotesCount('HB7O', String(id));
        }}
      />
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
