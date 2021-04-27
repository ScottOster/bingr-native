import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

export const WaitingRoom = ({ navigation, route }) => {
  const { roomCode, trackName } = route.params;
  console.log(route);
  return (
    <View>
      <Text>Test waiting room</Text>
      <Button
        title="Get Bingin"
        onPress={() => {
          navigation.navigate('MovieCard', { roomCode, trackName });
        }}
      />
    </View>
  );
};
