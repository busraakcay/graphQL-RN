import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { screens } from '../constants/screens';
import { Detail, Home } from '../screens';


const Stack = createNativeStackNavigator();
const AppStack = () => {
  return (
    <Stack.Navigator initialRouteName={screens.Home}>
      <Stack.Screen name={screens.Home} component={Home} />
      <Stack.Screen name={screens.Detail} component={Detail} />
    </Stack.Navigator>
  );
};

export default AppStack;
