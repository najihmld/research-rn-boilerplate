/* eslint-disable react/prop-types */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HeaderNavigation } from '../Components';

import Home from '../Screens/Home';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={Home}
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

export default AppNavigator;
