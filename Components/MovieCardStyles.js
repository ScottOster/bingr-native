import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import bingr1 from '../bingr1.png';
import toppic3 from '../toppic3.png';

export const MovieCardStyles = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.logo}>
        <Image style={styles.loginLogo} source={bingr1} />
      </View>
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.backgroundImage}
          source={{ uri: 'https://image.tmdb.org/t/p/w500/gCgt1WARPZaXnq523ySQEUKinCs.jpg' }}
        />
      </View>
      <LinearGradient
        colors={['transparent', 'transparent', 'transparent']}
        style={styles.fullBackground}>
        <View style={styles.info}>
          <View style={styles.infoBackground}>
            <Text style={styles.title}>Ground Hog Day</Text>
            <Text style={styles.rating}>Rating: 8.5</Text>
            <Text style={styles.description}>
              A cynical TV weatherman finds himself reliving the same day over and over again when
              he goes on location to the small town of Punxsutawney to film a report about their
              annual Groundhog Day. His predicament drives him to distraction, until he sees a way
              of turning the situation to his advantage.
            </Text>
          </View>
        </View>
        <View style={styles.bothButtons}>
          <TouchableOpacity style={styles.button1}>
            <LinearGradient
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 0.0, y: 0.0 }}
              locations={[0.0, 0.74]}
              colors={['#f2f2f2', '#f2f2f2']}
              style={styles.button}
              useAngle={true}
              angle={300}
              angleCenter={{ x: 0.5, y: 0.5 }}>
              <Text style={styles.buttonText1}>Cringr</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button2}>
            <LinearGradient
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 0.0, y: 0.0 }}
              locations={[0.0, 0.74]}
              colors={['#f2f2f2', '#f2f2f2']}
              style={styles.button}
              useAngle={true}
              angle={300}
              angleCenter={{ x: 0.5, y: 0.5 }}>
              <Text style={styles.buttonText2}>Bingr</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  fullBackground: {
    flex: 1,
  },

  logo: {
    backgroundColor: '#f2f2f2',
    // paddingTop: 30,
    width: '100%',
    height: 65,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
  },
 box: {
  backgroundColor: '#f2f2f2',
  height: 30,
  width:'100%',
 },
  loginLogo: {
    height: '60%',
    width: '20%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '1%',
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
    marginTop: 95,
    top: 0,
    left: 0,
    width: '100%',
    height: '90%',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    borderRadius: 5,
  },
  info: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  infoBackground: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  title: {
    color: '#f2f2f2',
    fontSize: 25,
    margin: 10,
    marginBottom: 0,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 0.5,
  },
  rating: {
    color: '#f2f2f2',
    fontSize: 15,
    margin: 10,
    marginBottom: 0,
  },
  description: {
    color: '#f2f2f2',
    fontSize: 12,
    margin: 10,
  },
  button1: {
    width: 150,
    height: 50,

    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 7.5,
    marginBottom: 7.5,
    borderColor: '#ff5050',
    borderWidth: 2,
  },
  button2: {
    width: 150,
    height: 50,

    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 7.5,
    marginBottom: 7.5,
    borderColor: '#4db35a',
    borderWidth: 2,
  },
  buttonText1: {
    fontSize: 20,
    textAlign: 'center',
    // margin: 10,
    color: '#ff5050',
  },
  buttonText2: {
    fontSize: 20,
    textAlign: 'center',
    // margin: 10,
    color: '#4db35a',
  },
  bothButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#f2f2f2',
    width: '100%',
    height: 65,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
});
