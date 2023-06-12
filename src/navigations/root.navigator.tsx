import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRouter} from './AppRouter';
import {AuthNavigator} from './navigators/auth.navigator';
import {MainNavigator} from './navigators/main.navigator';

export type RootStackParamList = {
  [AppRouter.Auth]: undefined;
  [AppRouter.Main]: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const isLogin = true;

export const RootNavigator = () => {
  return (
    <Stack.Navigator>
      {!isLogin ? (
        <Stack.Screen name={AppRouter.Auth} component={AuthNavigator} />
      ) : (
        <Stack.Screen name={AppRouter.Main} component={MainNavigator} />
      )}
    </Stack.Navigator>
  );
};
