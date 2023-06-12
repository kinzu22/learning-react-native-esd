import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppRouter} from '../AppRouter';
import {TabNavigator} from '../tabs/tab.navigator';

export type MainStackParamList = {
  [AppRouter.Tab]: undefined;
};

const Stack = createNativeStackNavigator<MainStackParamList>();

export const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={AppRouter.Tab} component={TabNavigator} />
    </Stack.Navigator>
  );
};
