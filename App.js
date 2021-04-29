import * as React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { Login } from './Components/Login';
import { HostFilter } from './Components/HostFilter';
import { MovieCard } from './Components/MovieCard';
import { WaitingRoom } from './Components/WaitingRoom';
import { ResultStyles } from './Components/ResultStyles';
import { MovieCardStyles } from './Components/MovieCardStyles';
import { Result } from './Components/Result';

// const getFonts = () => {
//   return Font.loadAsync({
//     'Pacifico-Regular': require('./assets/fonts/Pacifico-Regular.tff')
//   })
// }

export default function App() {
  // const [fontsLoaded, setFontsLoaded] = useState(false);
  const Stack = createStackNavigator();

  // if(fontsLoaded) {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="HostFilter" component={HostFilter}></Stack.Screen>
        <Stack.Screen name="WaitingRoom" component={WaitingRoom}></Stack.Screen>
        <Stack.Screen name="ResultStyles" component={ResultStyles}></Stack.Screen>
        <Stack.Screen name="MovieCardStyles" component={MovieCardStyles}></Stack.Screen>
        <Stack.Screen name="MovieCard" component={MovieCard}></Stack.Screen>
        <Stack.Screen name="Result" component={Result}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
