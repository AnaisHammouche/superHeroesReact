/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Subscribe from './src/views/Subscribe';
import {name as appName} from './app.json';
import SearchBar from './src/views/SearchScreen';
import LogIn from './src/views/LogIn';
import HeroesScreen from './src/views/HeroesScreen';
import DetailsScreen from './src/views/DetailsScreen';
import ProfilScreen from './src/views/ProfilScreen';
import ReadMeScreen from './src/views/ReadMeScreen';

AppRegistry.registerComponent(appName, () => SearchBar);
