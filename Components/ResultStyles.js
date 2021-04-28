import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export const ResultStyles = () => {
  return (
    <LinearGradient colors={['#b5e8f7', '#abffea']} style={styles.body}>
      <View style={styles.backgroundContainer}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: 'https://image.tmdb.org/t/p/w500/gCgt1WARPZaXnq523ySQEUKinCs.jpg',
          }}
        />
        <TouchableOpacity style={styles.button}>
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
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  loginPage: {
    backgroundColor: 'rgba(235, 235, 235, 0.2)',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
    marginBottom: 30,
    borderRadius: 10,
    flex: 1,
  },
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    height: '70%',
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    borderRadius: 20,
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

  button: {
    width: 270,
    height: 80,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    // backgroundColor: '#2C3E50',
  },
  buttonText: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
});
