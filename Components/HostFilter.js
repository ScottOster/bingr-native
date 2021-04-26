import React, { useState } from 'react';
import { Switch, View, Text } from 'react-native';

export const HostFilter = ({ navigation }) => {
  const [providers, setProviders] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = (provider, isEnabled, className) => {
    const id = Number(provider);
    if (className === 'setProviders') {
      setProviders((previousState) => {
        return updateState(id, isEnabled, previousState);
      });
    } else {
      setCategories((previousState) => {
        return updateState(id, isEnabled, previousState);
      });
    }

    const updateState = (id, checked, previousState) => {
      if (checked) {
        const newState = [...previousState, id];
        return newState;
      } else {
        const newState = [...previousState];
        const index = newState.indexOf(id);
        newState.splice(index, 1);
        return newState;
      }
    };
    setIsEnabled((previousState) => !previousState);
  };
  console.dir(providers);

  return (
    <View>
      <Text>Test host filter</Text>
      <Switch
        className='setProviders'
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor='#3e3e3e'
        onValueChange={toggleSwitch}
        value='8'
      />
    </View>
  );
};
