import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Button, View, Text, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../logo.png';
import { addUserToRoom } from '../firebase-api';

export const Login = ({ navigation }) => {
  const [trackName, setTrackName] = useState('');
  const [userRoomCode, setUserRoomCode] = useState('');
  const [errorMessage, setErrorMessage] = useState(false);

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
            placeholderTextColor={'#f9f9f9'}></TextInput>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('HostFilter', { trackName });
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
            onChangeText={setTrackName}
            value={trackName}
            placeholder={'Enter guest name'}
            placeholderTextColor={'#f9f9f9'}></TextInput>
          <TextInput
            style={styles.textInput}
            onChangeText={setUserRoomCode}
            value={userRoomCode}
            placeholder={'Room Code'}
            placeholderTextColor={'#f9f9f9'}></TextInput>
          <TouchableOpacity
            onPress={() => {
              addUserToRoom(userRoomCode, trackName).then((res) => {
                if (res) {
                  navigation.navigate('WaitingRoom', {
                    trackName,
                    roomCode: userRoomCode,
                  });
                } else {
                  setErrorMessage(true);
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
        {errorMessage && (
          <View>
            <Text>Invalid room</Text>
          </View>
        )}
      </View>
      <View style={styles.devs}>
        <Text style={styles.dev}>Deveoloped by:</Text>
        <Text style={styles.dev}>Nate Masters, Jonathan Bennett,</Text>
        <Text style={styles.dev}>Hasan Alfridi, Peter Keenan,</Text>
        <Text style={styles.dev}>Scott Oster</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingTop: 5,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    height: 80,
  },
  body: {
    flex: 1,
  },
  loginLogo: {
    height: 100,
    width: 100,
    // maxWidth: '30%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    // width: '50%',
    marginTop: 10,
    marginBottom: 50,
  },
  login: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  textInput: {
    // opacity: '0.1',
    marginBottom: 10,
    borderBottomColor: '#F9F9F9',
    borderBottomWidth: 1,
    padding: 5,
    textAlign: 'left',
  },
  button: {
    width: 120,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
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
    color: '#F9F9F9',
    textAlign: 'center',
    margin: 10,
  },
  devs: {
    textAlign: 'center',
    marginBottom: 2,
  },
  dev: {
    fontSize: 10,
    color: '#F9F9F9',
  },
});
