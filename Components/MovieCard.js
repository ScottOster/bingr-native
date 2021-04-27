import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { updateVotesTally, getMovieByPosition, updateVotesCount } from '../firebase-api';
import { changes } from '../snapShotTest';
export const MovieCard = ({ navigation, roomCode }) => {
  const [currentFilm, setCurrentFilm] = useState({});
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    console.log(counter);
    if (counter < 19) {
      setCounter((prevState) => {
        const newState = prevState;
        //console.log(newState, 'increment');
        return newState + 1;
      });
    } else {
      navigation.navigate('Result');
      // TODO: Sort navigation
      () => {};
    }
  };

  useEffect(() => {
    changes(15);
    const roomCode = 'OFRJ';
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
          updateVotesTally('OFRJ', String(id));
        }}
      />
      <Button
        title="bingr"
        onPress={() => {
          incrementCounter();
          updateVotesTally('OFRJ', String(id));
          updateVotesCount('OFRJ', String(id));
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
