import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { updateVotesTally, getMovieByPosition, updateVotesCount } from '../firebase-api';

export const MovieCard = ({ navigation, route }) => {
  const { roomCode, trackName } = route.params;

  const [currentFilm, setCurrentFilm] = useState({});
  const [counter, setCounter] = useState(0);
  const [disabledBtn, setDisabledBtn] = useState(false);

  const incrementCounter = () => {
    console.log(counter);
    if (counter < 19) {
      setCounter((prevState) => {
        const newState = prevState;
        return newState + 1;
      });
    } else {
      navigation.navigate('Result', { roomCode, trackName, currentFilm });
    }
  };

  useEffect(() => {
    getMovieByPosition(roomCode, counter).then((movie) => {
      setCurrentFilm(movie);
      setDisabledBtn(false);
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
        disabled={disabledBtn}
        onPress={() => {
          incrementCounter();
          updateVotesTally(roomCode, String(id));
          setDisabledBtn(true);
        }}
      />
      <Button
        title="bingr"
        disabled={disabledBtn}
        onPress={() => {
          incrementCounter();
          updateVotesTally(roomCode, String(id));
          updateVotesCount(roomCode, String(id));
          setDisabledBtn(true);
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
