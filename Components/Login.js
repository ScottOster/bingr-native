import React from 'react';
import { Button, View, Text } from 'react-native';

export const Login = ({ navigation }) => {
  return (
    <View>
      <Button
        title="HostGame"
        onPress={() => {
          navigation.navigate('HostFilter');
        }}
      />
      <Button
        title="MovieCard"
        onPress={() => {
          navigation.navigate('MovieCard');
        }}
      />
      <Button
        title="Result"
        onPress={() => {
          navigation.navigate('Result');
        }}
      />

      <Text>Test hellooooooo</Text>
    </View>
  );
};
