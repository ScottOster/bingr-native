import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import bingr1 from '../bingr1.png';
import toppic3 from '../toppic3.png';

export const ResultStyles = ({ navigation }) => {
  return (
    <LinearGradient colors={['#4ac6cd', '#49d695']} style={styles.body}>
      <View style={styles.logo}>
        <Image style={styles.loginLogo} source={bingr1} />
      </View>

      <View style={styles.whiteBackground}>
        <View style={styles.backgroundContainer}>
          <Image
            style={styles.backgroundImage}
            source={{
              uri:
                'https://image.tmdb.org/t/p/w500/gCgt1WARPZaXnq523ySQEUKinCs.jpg',
            }}
          />
        </View>
      </View>

      <View style={styles.topPicCon}>
        <Image style={styles.topPic} source={toppic3} />
      </View>
      <View style={styles.logo}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Login');
          }}
          style={styles.button}
        >
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
            <Text style={styles.buttonText}>Play Again</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },

  loginLogo: {
    height: '60%',
    width: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1%',
  },

  topPic: {
    height: '100%',
    width: '100%',
    transform: [{ rotate: '345deg' }],
  },

  topPicCon: {
    width: 250,
    height: 100,
    marginLeft: '15%',
    marginRight: '20%',
    marginTop: '70%',
    marginBottom: 20,
    position: 'absolute',
  },

  logo: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    height: 65,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },

  whiteBackground: {
    backgroundColor: '#f2f2f2',
    flex: 1,
    margin: 6,
  },

  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    height: '100%',
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    opacity: 0.8,
  },
  title: {
    color: '#363636',
    fontSize: 30,
    margin: 10,
    marginTop: 20,
    textAlign: 'center',
  },
  honourableMentions: {
    color: '#666666',
    fontSize: 18,
    margin: 4,
    marginTop: 20,
    textAlign: 'center',
  },
  text: {
    fontSize: 15,
    color: '#666666',
    textAlign: 'center',
    margin: 2,
  },

  topPick: {
    color: 'white',
    fontSize: 50,
    textAlign: 'center',
    marginTop: 10,
  },

  button: {
    width: 200,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',

    color: '#FFFFFF',
  },
});

{
  /* <TouchableOpacity style={styles.button}>
            <LinearGradient
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 0.0, y: 0.0 }}
              locations={[0.0, 0.74]}
              colors={['#4ac6cd', '#49d695']}
              style={styles.button}
              useAngle={true}
              angle={300}
              angleCenter={{ x: 0.5, y: 0.5 }}>
              <Text style={styles.buttonText}>Play Again</Text>
            </LinearGradient>
          </TouchableOpacity> */
}
