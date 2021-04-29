import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Button, Switch, View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { codeGenerator } from '../codeGenerator';
import { initiateMovieList } from '../movieList';
import { createGameRoom } from '../utils/createGameRoom';
import { createUserRoom } from '../firebase-api';
import bingr1 from '../bingr1.png';

export const HostFilter = ({ navigation, route }) => {
  const { trackName, isHost } = route.params;
  const [netflix, setIsNetflixEnabled] = useState(false);
  const [amazon, setIsAmazonEnabled] = useState(false);
  const [disney, setIsDisneyEnabled] = useState(false);
  const [action, setIsActionEnabled] = useState(false);
  const [comedy, setIsComedyEnabled] = useState(false);
  const [fantasy, setIsFantasyEnabled] = useState(false);
  const [horror, setIsHorrorEnabled] = useState(false);
  const [providers, setProviders] = useState([]);
  const [genres, setGenres] = useState([]);
  const [roomCode, setRoomCode] = useState('');
  const [creatingGame, setGameBeingCreated] = useState(false);

  useEffect(() => {
    const code = codeGenerator();
    console.log(code);
    setRoomCode(code);
  }, []);

  const toggleSwitch = (id) => {
    if (id === 8) {
      setIsNetflixEnabled((previousState) => !previousState);
    }
    if (id === 9) {
      setIsAmazonEnabled((previousState) => !previousState);
    }
    if (id === 337) {
      setIsDisneyEnabled((previousState) => !previousState);
    }
    if (id === 28) {
      setIsActionEnabled((previousState) => !previousState);
    }
    if (id === 35) {
      setIsComedyEnabled((previousState) => !previousState);
    }
    if (id === 14) {
      setIsFantasyEnabled((previousState) => !previousState);
    }
    if (id === 27) {
      setIsHorrorEnabled((previousState) => !previousState);
    }
    if (id === 8 || id === 9 || id === 337) {
      setProviders((prevState) => {
        if (providers.includes(id)) {
          const newState = [...prevState];
          const index = newState.indexOf(id);
          newState.splice(index, 1);
          return newState;
        } else {
          const newState = [...prevState, id];
          return newState;
        }
      });
    } else {
      setGenres((prevState) => {
        if (genres.includes(id)) {
          const newState = [...prevState];
          const index = newState.indexOf(id);
          newState.splice(index, 1);
          return newState;
        } else {
          const newState = [...prevState, id];
          return newState;
        }
      });
    }
  };

  return (
    <LinearGradient colors={['#4ac6cd', '#49d695']} style={styles.fullBackground}>
      <View style={styles.backGround}>
        <View style={styles.filterBox}>
          <View style={styles.logo}>
            <Image style={styles.loginLogo} source={bingr1} />
          </View>

          <View style={styles.questionsBorder}>
            <Text style={styles.questions}>What are you watching on?</Text>
          </View>
          <View style={styles.allSwitch}>
            <View style={styles.switchAndText}>
              <Text style={styles.text}>Netlix</Text>
              <Switch
                style={styles.switch}
                className="setProviders"
                id=""
                trackColor={{ false: '#767577', true: '#4ac6cd' }}
                thumbColor={netflix ? '#4ac6cd' : '#4ac6cd'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(8)}
                value={netflix}
              />
            </View>
            <View style={styles.switchAndText}>
              <Text style={styles.text}>Amazon Prime</Text>
              <Switch
                style={styles.switch}
                className="setProviders"
                trackColor={{ false: '#767577', true: '#4ac6cd' }}
                thumbColor={amazon ? '#4ac6cd' : '#4ac6cd'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(9)}
                value={amazon}
              />
            </View>
            <View style={styles.switchAndText}>
              <Text style={styles.text}>Disney+</Text>
              <Switch
                style={styles.switch}
                className="setProviders"
                trackColor={{ false: '#767577', true: '#4ac6cd' }}
                thumbColor={disney ? '#4ac6cd' : '#4ac6cd'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => toggleSwitch(337)}
                value={disney}
              />
            </View>
          </View>
          <View style={styles.questionsBorder}>
            <Text style={styles.questions}>What genre?</Text>
          </View>
          <View style={styles.switchAndText}>
            <Text style={styles.text}>Action</Text>
            <Switch
              style={styles.switch}
              className="setGenres"
              trackColor={{ false: '#767577', true: '#4ac6cd' }}
              thumbColor={action ? '#4ac6cd' : '#4ac6cd'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(28)}
              value={action}
            />
          </View>
          <View style={styles.switchAndText}>
            <Text style={styles.text}>Comedy</Text>
            <Switch
              style={styles.switch}
              className="setGenres"
              trackColor={{ false: '#767577', true: '#4ac6cd' }}
              thumbColor={comedy ? '#4ac6cd' : '#4ac6cd'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(35)}
              value={comedy}
            />
          </View>
          <View style={styles.switchAndText}>
            <Text style={styles.text}>Fantasy</Text>
            <Switch
              style={styles.switch}
              className="setGenres"
              trackColor={{ false: '#767577', true: '#4ac6cd' }}
              thumbColor={fantasy ? '#4ac6cd' : '#4ac6cd'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(14)}
              value={fantasy}
            />
          </View>
          <View style={styles.switchAndText}>
            <Text style={styles.text}>Horror</Text>
            <Switch
              style={styles.switch}
              className="setGenres"
              trackColor={{ false: '#767577', true: '#4ac6cd' }}
              thumbColor={horror ? '#4ac6cd' : '#4ac6cd'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => toggleSwitch(27)}
              value={horror}
            />
          </View>

          {providers.length && genres.length ? (
            <TouchableOpacity
              disabled={creatingGame}
              onPress={() => {
                setGameBeingCreated(true);
                initiateMovieList(providers, genres)
                  .then((movies) => {
                    const finalMovies = movies.slice(0, 20);
                    return createGameRoom(roomCode, finalMovies);
                  })
                  .then(() => {
                    return createUserRoom(roomCode, trackName);
                  })
                  .then(() => {
                    console.log('movies added to DB');
                    navigation.navigate('WaitingRoom', {
                      roomCode,
                      trackName,
                      isHost,
                    });
                  })
                  .catch((error) => {
                    console.dir(error);
                  });
              }}
              style={styles.button}>
              <LinearGradient
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 0.0, y: 0.0 }}
                locations={[0.0, 0.74]}
                colors={['#4ac6cd', '#49d695']}
                style={styles.button}
                useAngle={true}
                angle={100}
                angleCenter={{ x: 0.5, y: 0.5 }}>
                <Text style={styles.buttonText}>START</Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <Text style={styles.warningMsg}>Please select at least one provider and genre</Text>
          )}
          {creatingGame && <Text style={styles.createRoom}>Creating game room...</Text>}
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  fullBackground: {
    flex: 1,
  },
  logo: {
    // backgroundColor: '#f2f2f2',
    width: '100%',
    height: 100,
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 35,
    // fontSize: 20,
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,
    //   borderBottomWidth: 1,
    //   borderBottomColor: 'gray',
  },

  loginLogo: {
    height: 100,
    width: 180,
    // maxWidth: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // paddingTop: 10,
    // paddingBottom: 10,
    // width: '50%',
    marginTop: '1%',
    // marginBottom: '1%',
    // marginBottom: 50,
  },

  backGround: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    margin: 6,
    marginTop: 50,
    borderRadius: 20,
  },

  createRoom: {
    color: '#4ac6cd',
    textAlign: 'center',
    marginTop: 15,
    fontSize: 25,
  },
  filterBox: {
    // backgroundColor: 'red',
  },

  greetingBackground: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 20,
  },

  greeting: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    color: '#666666',
  },
  questions: {
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 20,
    color: '#666666',
  },

  questionsBorder: {
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 10,
    marginBottom: 10,
  },

  switchAndText: {
    marginLeft: 50,
    marginRight: 15,
    margin: 7,
    // backgroundColor: '#666666',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  allSwitch: {
    // backgroundColor: 'green',
    display: 'flex',
  },

  switch: {
    // backgroundColor: 'purple',
  },

  text: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'left',
    // backgroundColor: 'pink',
    width: 70,
  },
  button: {
    width: 120,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    // backgroundColor: '#2C3E50',
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },

  warningMsg: {
    color: '#ff5050',
    marginTop: 40,
    textAlign: 'center',
  },
});
