import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRouter} from '../AppRouter';
import LoginScreen from '../../screens/login';
import RegisterScreen from '../../screens/register';

export type AuthStackParamList = {
  [AppRouter.Login]: undefined;
  [AppRouter.Register]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRouter.Login} component={LoginScreen} />
      <Stack.Screen name={AppRouter.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};
