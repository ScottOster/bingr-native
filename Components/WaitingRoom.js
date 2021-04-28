import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Button, Switch, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { color } from 'react-native-reanimated';
import { getUsersByRoomCode } from '../firebase-api';
import firebase from '../config';

export const WaitingRoom = ({ navigation, route }) => {
  const { roomCode, trackName, isHost } = route.params;
  const [users, setUsers] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection(`${roomCode}users`)
      .onSnapshot((snapshot) => {
        const usersOnFb = [];
        snapshot.forEach((doc) => {
          console.log(doc.data());
          usersOnFb.push(doc.data().name);
        });
        setUsers(usersOnFb);
      });
  }, []);

  return (
    <LinearGradient colors={['#4ac6cd', '#49d695']} style={styles.fullBackground}>
      <View style={styles.backGround}>
        <Text style={styles.code}>{roomCode}</Text>
        <View style={styles.names}>
          <Text> Joined Players</Text>
          {users.map((user) => {
            return (
              <Text style={styles.name} key={user}>
                {user}
              </Text>
            );
          })}
        </View>
        <TouchableOpacity
          title="Get Bingin"
          style={styles.button}
          onPress={() => {
            navigation.navigate('MovieCard', { roomCode, trackName, users });
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
            <Text style={styles.buttonText}>Get Binging</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  fullBackground: {
    flex: 1,
  },

  backGround: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    margin: 6,
    borderRadius: 20,
  },
  code: {
    fontSize: 50,
    color: '#666666',
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 50,
  },

  names: {
    textAlign: 'center',
    margin: 30,
  },

  name: {
    textAlign: 'center',
    margin: 5,
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
