import React, { useState, useEffect } from 'react';

import { Button, Switch, View, Text } from 'react-native';
import { codeGenerator } from '../codeGenerator';
import { initiateMovieList } from '../movieList';
import { createGameRoom } from '../utils/createGameRoom';
import { createUserRoom } from '../firebase-api';
export const HostFilter = ({ navigation }) => {
  const [netflix, setIsNetflixEnabled] = useState(false);
  const [amazon, setIsAmazonEnabled] = useState(false);
  const [disney, setIsDisneyEnabled] = useState(false);
  const [action, setIsActionEnabled] = useState(false);
  const [comedy, setIsComedyEnabled] = useState(false);
  const [fantasy, setIsFantasyEnabled] = useState(false);
  const [horror, setIsHorrorEnabled] = useState(false);
  const [providers, setProviders] = useState([]);
  const [genres, setGenres] = useState([]);
  const [roomCode, setRoomCode] = useState('');

  const toggleSwitch = (id) => {
    if (id === 8) {
      setIsNetflixEnabled((previousState) => !previousState);
    }
    if (id === 9) {
      setIsAmazonEnabled((previousState) => !previousState);
    }
    if (id === 337) {
      setIsDisneyEnabled((previousState) => !previousState);
    }
    if (id === 28) {
      setIsActionEnabled((previousState) => !previousState);
    }
    if (id === 35) {
      setIsComedyEnabled((previousState) => !previousState);
    }
    if (id === 14) {
      setIsFantasyEnabled((previousState) => !previousState);
    }
    if (id === 27) {
      setIsHorrorEnabled((previousState) => !previousState);
    }
    if (id === 8 || id === 9 || id === 337) {
      setProviders((prevState) => {
        if (providers.includes(id)) {
          const newState = [...prevState];
          const index = newState.indexOf(id);
          newState.splice(index, 1);
          return newState;
        } else {
          const newState = [...prevState, id];
          return newState;
        }
      });
    } else {
      setGenres((prevState) => {
        if (genres.includes(id)) {
          const newState = [...prevState];
          const index = newState.indexOf(id);
          newState.splice(index, 1);
          return newState;
        } else {
          const newState = [...prevState, id];
          return newState;
        }
      });
    }
  };

  return (
    <View>
      <Text>Hello Nate</Text>
      <Text>What are you watching on?</Text>
      <View>
        <Switch
          className="setProviders"
          id=""
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={netflix ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch(8)}
          value={netflix}
        />
        <Text>Netlix</Text>
      </View>
      <View>
        <Switch
          className="setProviders"
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={amazon ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch(9)}
          value={amazon}
        />
        <Text>Amazon</Text>
      </View>
      <View>
        <Switch
          className="setProviders"
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={disney ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch(337)}
          value={disney}
        />
        <Text>Disney</Text>
      </View>
      <Text>Select a genre</Text>
      <View>
        <Switch
          className="setGenres"
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={action ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch(28)}
          value={action}
        />
        <Text>Action</Text>
      </View>
      <View>
        <Switch
          className="setGenres"
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={comedy ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch(35)}
          value={comedy}
        />
        <Text>Comedy</Text>
      </View>
      <View>
        <Switch
          className="setGenres"
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={fantasy ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch(14)}
          value={fantasy}
        />
        <Text>Fantasy</Text>
      </View>
      <View>
        <Switch
          className="setGenres"
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={horror ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => toggleSwitch(27)}
          value={horror}
        />
        <Text>Horror</Text>
      </View>
      <Button
        title="Start"
        onPress={() => {
          initiateMovieList(providers, genres).then((movies) => {
            createGameRoom(roomCode, movies);
            createUserRoom(roomCode, 'HARDCODED Scott');
          });
          navigation.navigate('WaitingRoom');
        }}
      />
    </View>
  );
};
