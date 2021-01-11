/* eslint-disable react/prop-types */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderNavigation } from '../Components';

import Login from '../Screens/Auth';
import Verify from '../Screens/Auth/Verify';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        header: ({ navigation, scene }) => (
          <HeaderNavigation
            navigation={navigation}
            scene={scene}
          />
        )
      }}
    />
    <Stack.Screen
      name="Verify"
      component={Verify}
      options={{
        header: ({ navigation, scene }) => (
          <HeaderNavigation
            navigation={navigation}
            scene={scene}
          />
        )
      }}
    />
  </Stack.Navigator>
);

export default AuthNavigator;
