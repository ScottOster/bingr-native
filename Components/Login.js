import React, {useState} from 'react';
import { Button, View, Text, Image, TextInput } from 'react-native';
import logo from '../logo.png'


export const Login = ({ navigation, hostName}, setCode) => {
const [name, setName] = useState('')

  return (
    <View>
      <Image source={logo} style={{ width: 50, height: 50 }} />
      <TextInput onChangeText={(e)=> {
        setName(e)
       
        }} value={hostName} placeholder={"Enter name"}></TextInput>
      <Button
        title='Host Game'
        onPress={() => {
          
          navigation.navigate('HostFilter');
        }}
      />
  <TextInput onChangeText={()=> {}} value={hostName} placeholder={"Enter name as guest"}></TextInput>
  <TextInput onChangeText={()=> {setCode}}  placeholder={"Enter room-code"}></TextInput>
  <Button
        title='Join game'
        onPress={() => {
          navigation.navigate('HostFilter');
        }}
      />
      
    </View>
  );
};
