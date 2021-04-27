import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Button, View, Text, Image, TextInput } from 'react-native';
import logo from '../logo.png'
import { LinearGradient } from 'expo-linear-gradient';


export const Login = ({ navigation, hostName }, setCode) => {
  const [name, setName] = useState('')

  return (
    <LinearGradient colors={['#4ac6cd', '#49d695']} style={styles.body}>
      <View style={styles.loginPage}>

        <View style={styles.loginLogo}>
          <Image style={styles.loginLogo} source={logo} />
        </View>

        <View style={styles.login}>


          <TextInput style={styles.textInput} onChangeText={(e) => { setName(e) }} value={hostName} placeholder={"Enter name"} placeholderTextColor={'#f9f9f9'}></TextInput>
          <TouchableOpacity onPress={() => {

            navigation.navigate('HostFilter');
          }} style={styles.button}>
            <LinearGradient
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 0.0, y: 0.0 }}
              locations={[0.0, 0.74]}
              colors={['#4ac6cd', '#49d695']}
              style={styles.button}
              useAngle={true}
              angle={100}
              angleCenter={{ x: 0.5, y: 0.5 }}
            >
              <Text style={styles.buttonText}>
                HOST GAME
          </Text>
            </LinearGradient>
          </TouchableOpacity>


          <Text style={styles.or}>OR</Text>


          <TextInput style={styles.textInput} onChangeText={() => { }} value={hostName} placeholder={"Enter guest name"} placeholderTextColor={'#f9f9f9'}></TextInput>
          <TextInput style={styles.textInput} onChangeText={() => { setCode }} placeholder={"Room Code"} placeholderTextColor={'#f9f9f9'}></TextInput>
          <TouchableOpacity onPress={() => {

            navigation.navigate('HostFilter');
          }} style={styles.button}>
            <LinearGradient
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 0.0, y: 0.0 }}
              locations={[0.0, 0.74]}
              colors={['#4ac6cd', '#49d695']}
              style={styles.button}
              useAngle={true}
              angle={300}
              angleCenter={{ x: 0.5, y: 0.5 }}
            >
              <Text style={styles.buttonText}>
                JOIN GAME
          </Text>
            </LinearGradient>
          </TouchableOpacity>

        </View>
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
    paddingTop: '5px',
    paddingBottom: '15px',
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: '10%',
    marginBottom: '10%',
    borderRadius: '10px',
    height: '80%',
  },

  body: {
    flex: 1,
  },

  loginLogo: {
    height: '100px',
    width: '100px',
    // maxWidth: '30%',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingTop: '10px',
    paddingBottom: '10px',
    // width: '50%',
    marginTop: '10%',
    marginBottom: '50px',
  },

  login: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: '20%',
    marginRight: '20%',
  },

  textInput: {
    // opacity: '0.1',
    marginBottom: '10px',
    borderBottomColor: '#f9f9f9',
    borderBottomWidth: '1px',
    padding: '5px',
    textAlign: 'left',

  },

  button: {
    width: 120,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px',
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    // backgroundColor: '#2c3e50',
  },

  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
  },

  or: {
    color: '#f9f9f9',
    textAlign: 'center',
    margin: '10px',
  },

  devs: {
    textAlign: 'center',
    marginBottom: '2%',
  },

  dev: {
    fontSize: 10,
    color: '#f9f9f9',

  }
})
