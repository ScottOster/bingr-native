import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { updateVotesTally, getMovieByPosition, updateVotesCount } from '../firebase-api';

export const MovieCard = ({ navigation, route }) => {
  const { roomCode, trackName, users } = route.params;

  const [currentFilm, setCurrentFilm] = useState({});
  const [counter, setCounter] = useState(0);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [finalFilm, setFinalFilm] = useState({});

  const incrementCounter = () => {
    console.log(counter);
    if (counter < 19) {
      setCounter((prevState) => {
        const newState = prevState;
        return newState + 1;
      });
    } else {
      navigation.navigate('Result', {
        roomCode,
        trackName,
        users,
        finalFilm,
      });
    }
  };

  useEffect(() => {
    getMovieByPosition(roomCode, counter).then((movie) => {
      setCurrentFilm(movie);
      setDisabledBtn(false);
    });
  }, [counter]);

  useEffect(() => {
    getMovieByPosition(roomCode, 19).then((finalFilm) => {
      setFinalFilm(finalFilm);
    });
  }, []);

  const { title, vote_average, overview, poster_path, id } = currentFilm;

  return (
    <View style={styles.container}>
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.backgroundImage}
          source={{ uri: `https://image.tmdb.org/t/p/w500${poster_path}` }}
        />
      </View>
      <LinearGradient colors={['transparent', '#000000']} style={styles.fullBackground}>
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>Rating: {vote_average}</Text>
          <Text style={styles.description}>{overview}</Text>
          <View style={styles.bothButtons}>
            <TouchableOpacity
              style={styles.button}
              title="cringr"
              disabled={disabledBtn}
              onPress={() => {
                incrementCounter();
                updateVotesTally(roomCode, String(id));
                setDisabledBtn(true);
              }}>
              <LinearGradient
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 0.0, y: 0.0 }}
                locations={[0.0, 0.74]}
                colors={['#ff5050', '#d4815d']}
                style={styles.button}
                useAngle={true}
                angle={300}
                angleCenter={{ x: 0.5, y: 0.5 }}>
                <Text style={styles.buttonText}>Cringr</Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              title="bingr"
              disabled={disabledBtn}
              onPress={() => {
                incrementCounter();
                updateVotesTally(roomCode, String(id));
                updateVotesCount(roomCode, String(id));
                setDisabledBtn(true);
              }}>
              <LinearGradient
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 0.0, y: 0.0 }}
                locations={[0.0, 0.74]}
                colors={['#4ac6cd', '#49d695']}
                style={styles.button}
                useAngle={true}
                angle={300}
                angleCenter={{ x: 0.5, y: 0.5 }}>
                <Text style={styles.buttonText}>Bingr</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  fullBackground: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  backgroundContainer: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
  info: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    margin: 10,
    marginBottom: 0,
  },
  description: {
    color: '#FFFFFF',
    margin: 10,
    marginBottom: 20,
  },
  button: {
    width: 140,
    height: 50,
    marginBottom: 30,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    // backgroundColor: '#2C3E50',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  bothButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
