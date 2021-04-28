import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


export const MovieCardStyles = () => {
  

  return (
    <View style = {styles.container}>
      <View style = {styles.backgroundContainer}>
      <Image
        style={styles.backgroundImage}
        source={{ uri: `https://image.tmdb.org/t/p/w500/npOnzAbLh6VOIu3naU5QaEcTepo.jpg` }}
        />
      </View>
      <LinearGradient colors={['#C14242', '#ffffff']} style={styles.fullBackground}>
      <View>
       <Text>Castle in the Sky</Text>
        <Text>7.9</Text>
        <Text>A young boy and a girl with a magic crystal must race against pirates and foreign agents in a search for a legendary floating castle."</Text>
      <Button
        title="cringr"
        />
        <Button
      title="bingr"
        /> 
      </View>
    </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  fullBackground: {
    flex: 1,
  },
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-end',
  },
  backgroundContainer: {
      flex: 1,
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
  }, 
  backgroundImage: {
      flex: 1, 
      width: null, 
      height: null
  },
});

