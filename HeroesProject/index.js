/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LogIn from './src/views/LogIn';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LogIn);
