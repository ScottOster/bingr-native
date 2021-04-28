import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { getUsersByRoomCode } from '../firebase-api';
import firebase from '../config';

export const WaitingRoom = ({ navigation, route }) => {
  const { roomCode, trackName } = route.params;
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
    <View>
      <Text>{roomCode} waiting room</Text>
      {users.map((user) => {
        return <Text key={user}>{user}</Text>;
      })}
      <Button
        title='Get Bingin'
        onPress={() => {
          navigation.navigate('MovieCard', { roomCode, trackName, users });
        }}
      />
    </View>
  );
};
