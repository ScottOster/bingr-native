import React from 'react';
import { Button, View, Text } from 'react-native';

export const Login = ({ navigation }) => {
  return (
    <View>
      <Button
        title='HostGame'
        onPress={() => {
          navigation.navigate('HostFilter');
        }}
      />
  <Button
        title='MoviesList'
        onPress={() => {
          navigation.navigate('MoviesList');
        }}
      />
      <Text>Test hellooooooo</Text>
    </View>
  );
};
