import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../bingrSize1.png';
import { addUserToRoom, joinRoomErrorChecker } from '../firebase-api';

export const Login = ({ navigation }) => {
  const [trackName, setTrackName] = useState('');
  const [userRoomCode, setUserRoomCode] = useState('');
  const [roomDoesNotExist, setRoomExists] = useState(null);
  const [someonesFinished, setSomeonesFinished] = useState(null);
  const [userExists, setUserExists] = useState(null);

  return (
    <LinearGradient colors={['#4ac6cd', '#49d695']} style={styles.body}>
      <View style={styles.loginPage}>
        <View style={styles.loginLogo}>
          <Image style={styles.loginLogo} source={logo} />
        </View>

        <View style={styles.login}>
          <TextInput
            style={styles.textInput}
            onChangeText={setTrackName}
            value={trackName}
            placeholder={'Enter name'}
            placeholderTextColor={'gray'}></TextInput>

          {trackName.length < 2 && trackName.length > 0 && (
            <Text style={styles.errorMessage}>Name must be longer than two characters</Text>
          )}

          <TouchableOpacity
            disabled={trackName.length < 2}
            onPress={() => {
              navigation.navigate('HostFilter', { trackName, isHost: true });
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
              <Text style={styles.buttonText}>HOST GAME</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.or}>OR</Text>

          <TextInput
            style={styles.textInput}
            onChangeText={setUserRoomCode}
            value={userRoomCode}
            placeholder={'Enter 4 digit room code'}
            placeholderTextColor={'gray'}></TextInput>
          <TouchableOpacity
            disabled={userRoomCode.length < 4 || trackName.length < 2}
            onPress={() => {
              const capitalizedRoomCode = userRoomCode.toUpperCase();
              joinRoomErrorChecker(capitalizedRoomCode, trackName).then((res) => {
                setRoomExists(res[0]);
                setUserExists(res[1]);
                setSomeonesFinished(res[2]);
                if (res.every((status) => status === false)) {
                  addUserToRoom(capitalizedRoomCode, trackName).then(() => {
                    navigation.navigate('WaitingRoom', {
                      trackName,
                      roomCode: capitalizedRoomCode,
                    });
                  });
                }
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
              angle={300}
              angleCenter={{ x: 0.5, y: 0.5 }}>
              <Text style={styles.buttonText}>JOIN GAME</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        {roomDoesNotExist && (
          <View>
            <Text style={styles.errorMessage}>Invalid room</Text>
          </View>
        )}
        {someonesFinished && (
          <View>
            <Text style={styles.errorMessage}>Cannot join game in progress...</Text>
          </View>
        )}
        {userExists && (
          <View>
            <Text style={styles.errorMessage}>User already exists</Text>
          </View>
        )}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    backgroundColor: '#f2f2f2',
    paddingTop: 5,
    paddingBottom: 1,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 75,
    marginBottom: 25,
    borderRadius: 10,
    height: 1,
    flex: 1,
  },
  body: {
    flex: 1,
  },
  loginLogo: {
    height: 130,
    width: 200,
    // maxWidth: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    // width: '50%',
    marginTop: 20,
    marginBottom: 50,
  },
  login: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 40,
    marginRight: 40,
  },
  textInput: {
    // opacity: '0.1',
    marginBottom: 20,
    marginTop: 20,
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 2,
    padding: 5,
    textAlign: 'left',
  },
  button: {
    width: 120,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    marginTop: 10,
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
  or: {
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  devs: {
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  dev: {
    fontSize: 10,
    color: '#f2f2f2',
  },

  errorMessage: {
    color: '#ff5050',
    fontSize: 12,
    textAlign: 'center',
  },
});
