import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Button, Switch, View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
  console.log(providers, genres);
  return (
    <View style={styles.backGround}>
      <View style={styles.filterBox}>
        <Text style={styles.greeting}>Hi Nate</Text>
        <Text style={styles.questions}>What are you watching on?</Text>
        <View style={styles.switchAndText}>
          <Switch
            style={styles.switch}
            className="setProviders"
            id=""
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={netflix ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(8)}
            value={netflix}
          />
          <Text style={styles.text}>Netlix</Text>
        </View>
        <View style={styles.switchAndText}>
          <Switch
            style={styles.switch}
            className="setProviders"
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={amazon ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(9)}
            value={amazon}
          />
          <Text style={styles.text}>Amazon</Text>
        </View>
        <View style={styles.switchAndText}>
          <Switch
            style={styles.switch}
            className="setProviders"
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={disney ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(337)}
            value={disney}
          />
          <Text style={styles.text}>Disney</Text>
        </View>
        <Text style={styles.questions}>What genre?</Text>
        <View style={styles.switchAndText}>
          <Switch
            style={styles.switch}
            className="setGenres"
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={action ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(28)}
            value={action}
          />
          <Text style={styles.text}>Action</Text>
        </View>
        <View style={styles.switchAndText}>
          <Switch
            style={styles.switch}
            className="setGenres"
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={comedy ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(35)}
            value={comedy}
          />
          <Text style={styles.text}>Comedy</Text>
        </View>
        <View style={styles.switchAndText}>
          <Switch
            style={styles.switch}
            className="setGenres"
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={fantasy ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(14)}
            value={fantasy}
          />
          <Text style={styles.text}>Fantasy</Text>
        </View>
        <View style={styles.switchAndText}>
          <Switch
            style={styles.switch}
            className="setGenres"
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={horror ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => toggleSwitch(27)}
            value={horror}
          />
          <Text style={styles.text}>Horror</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('HostFilter');
          }}
          style={styles.button}>
          <LinearGradient
            start={{ x: 0.0, y: 0.0 }}
            end={{ x: 0.0, y: 0.0 }}
            locations={[0.0, 0.74]}
            colors={['#4ac6cd', '#49d695']}
            style={styles.button}
            useAngle={true}
            angle={100}
            angleCenter={{ x: 0.5, y: 0.5 }}>
            <Text style={styles.buttonText}>START</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#F2F2F2',
    flex: 1,
  },
  greeting: {
    fontSize: 35,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    color: '#4D4D4D',
  },
  questions: {
    fontSize: 15,
    marginLeft: 15,
    marginBottom: 10,
    marginTop: 10,
    color: '#666666',
  },
  switch: {
    marginLeft: 50,
    marginRight: 15,
    margin: 7,
  },
  switchAndText: {
  },
  text: {
    fontSize: 15,
    color: '#666666',
  },
  button: {
    width: 120,
    height: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 10,
    // backgroundColor: '#2C3E50',
  },
  buttonText: {
    fontSize: 14,
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
});







