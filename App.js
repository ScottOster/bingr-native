import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import {useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './Components/Login';
import { HostFilter } from './Components/HostFilter';
import { MoviesList } from './Components/MoviesList';
import { WaitingRoom } from './Components/WaitingRoom';
import { Result } from './Components/Result';

export default function App() {
  const Stack = createStackNavigator();
  const [roomCode, setRoomCode] = useState('f');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login' component={Login}></Stack.Screen>
        <Stack.Screen name='HostFilter' component={HostFilter}></Stack.Screen>
        <Stack.Screen name='WaitingRoom' component={WaitingRoom} setRoomCode={setRoomCode} roomCode={roomCode}></Stack.Screen>
        <Stack.Screen name='MoviesList' component={MoviesList}></Stack.Screen>
        <Stack.Screen name='Result' component={Result}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
