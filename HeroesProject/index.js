/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import HeroesScreen from './src/views/HeroesScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => HeroesScreen);
