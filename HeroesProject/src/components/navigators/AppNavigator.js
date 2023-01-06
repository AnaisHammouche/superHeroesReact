import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import LogInScreen from '../../views/LogIn';
import HomeScreen from '../../views/HomeScreen';
import HeroesScreen from '../../views/HeroesScreen';
import ProfilScreen from '../../views/ProfilScreen';

import Subscribe from '../../views/Subscribe';

function AppNavigator() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="HeroesScreen" component={HeroesScreen} />
        <Stack.Screen name="Subscribe" component={Subscribe} />
        <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
