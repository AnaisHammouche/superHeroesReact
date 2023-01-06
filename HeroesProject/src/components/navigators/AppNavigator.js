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
      <Stack.Navigator initialRouteName="Bienvenue">
        <Stack.Screen name="ProfilScreen" component={ProfilScreen} />
        <Stack.Screen name="Bienvenue" component={HomeScreen} />
        <Stack.Screen name="Connexion" component={LogInScreen} />
        <Stack.Screen name="Liste des Héros" component={HeroesScreen} />
        <Stack.Screen name="Inscription" component={Subscribe} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
