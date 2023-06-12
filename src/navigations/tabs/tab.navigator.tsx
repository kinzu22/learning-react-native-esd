import React from 'react';
import {AppRouter} from '../AppRouter';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/home';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={AppRouter.Home} component={HomeScreen} />
      {/* <Tab.Screen name={AppRouter.Dashboard} component={DashboardScreen} />
      <Tab.Screen name={AppRouter.Asset} component={AssetScreen} /> */}
    </Tab.Navigator>
  );
};
