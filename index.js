/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

console.disableYellowBox = true;
console.ignoredYellowBox = ['Warning: Each', 'Warning: Failed', '-[RCTRootView cancelTouches]'];

AppRegistry.registerComponent(appName, () => App);
