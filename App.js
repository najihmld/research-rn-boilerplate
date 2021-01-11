import React from 'react';
import 'react-native-gesture-handler';
import RNBootSplash from 'react-native-bootsplash';
// import { Client } from 'rollbar-react-native';
import Navigator from './src/Navigation/RootNavigator';

// const rollbar = new Client('cfd16a2ffdc54c77b988e4d0652a3fb8');

const App = () => {
  setTimeout(() => {
    RNBootSplash.hide({ fade: true });
  }, 0);

  // rollbar.log('Hello world!');

  return <Navigator />;
};

export default App;
