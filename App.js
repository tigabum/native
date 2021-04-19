import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Screens/Login'
import Home from './Screens/Home';

const Stack = createStackNavigator();
const screenOptionsContainer = {
headerStyle:{
  backgroundColor:'#00780D'
},
headerTitleStyle:{
  color:'white'
}
}

export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator screenOptions={screenOptionsContainer} >
       <Stack.Screen name="Login" component={Login} options={{title:'Log In'}} />
       
     </Stack.Navigator>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
