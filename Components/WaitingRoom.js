import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import codeGenerator from '../codeGenerator';

export const WaitingRoom = ({ navigation }) => {
  return (
    <View>
      <Text>Test waiting room{codeGenerator}</Text>
    </View>
  );
};
