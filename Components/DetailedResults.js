import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import firebase from '../config';
import { getTopFiveMovies, getMovie, updateUserProgress, deleteGameRoom, deleteUsersRoom} from '../firebase-api';

export const DetailedResults = () => {


  const [isLoading, setIsLoading] = useState(true);
  const [topMovie, setTopMovie] = useState(null);
  const [runnersUp, setRunnersUp] = useState([]);



  return (<Text>Test</Text>)
};

