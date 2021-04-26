import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../../screens/login/Login';
import RoutesName from '../../components/constants/RoutesName';

const Stack = createStackNavigator();
const {LOGIN} = RoutesName;

export const NotAuthRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={LOGIN}
        component={Login}
        options={{
          header: () => null,
        }} />
    </Stack.Navigator>
  );
};
