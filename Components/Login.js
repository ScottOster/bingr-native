import React, { useState } from 'react';
import { StyleSheet, Button, View, Text, Image, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import logo from '../logo.png';

export const Login = ({ navigation }) => {
  const [trackName, setTrackName] = useState('');

  return (
    <LinearGradient colors={['#4ac6cd', '#49d695']} style={styles.body}>
      <View style={styles.loginPage}>
        <Image source={logo} style={{ width: 50, height: 50 }} />
        <TextInput
          onChangeText={setTrackName}
          value={trackName}
          placeholder={'Enter name'}></TextInput>
        <Button
          title="Host Game"
          onPress={() => {
            navigation.navigate('HostFilter', { trackName });
          }}
        />
        <TextInput
          onChangeText={() => {}}
          value={trackName}
          placeholder={'Enter name as guest'}></TextInput>
        <TextInput onChangeText={() => {}} placeholder={'Enter room-code'}></TextInput>
        <Button
          title="Join game"
          onPress={() => {
            navigation.navigate('HostFilter');
          }}
        />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  loginPage: {
    background: 'rgba(0, 0, 0, 0.3)',
    paddingTop: '5px',
    paddingBottom: '15px',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '10%',
    borderRadius: '10px',
    height: '50%',
  },

  body: {
    flex: 1,
  },
});
