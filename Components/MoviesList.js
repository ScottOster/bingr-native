import React from 'react';
import { View, Text } from 'react-native';
import MovieCard from './MovieCard';

export const MoviesList = ({ navigation, roomCode }) => {
  return (
    <View>
      <Text>Test MovieList</Text>
      <MovieCard roomCode={roomCode} />
    </View>
  );
};
