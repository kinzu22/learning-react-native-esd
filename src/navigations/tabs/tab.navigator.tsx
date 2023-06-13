import React from 'react';
import {AppRouter} from '../AppRouter';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DashboardScreen from '../../screens/dashboard';
import AssetScreen from '../../screens/asset';
import ScanScreen from '../../screens/scan';
import TaskScreen from '../../screens/task';
import RequestScreen from '../../screens/request';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={AppRouter.Dashboard} component={DashboardScreen} />
      <Tab.Screen name={AppRouter.Asset} component={AssetScreen} />
      <Tab.Screen name={AppRouter.Scan} component={ScanScreen} />
      <Tab.Screen name={AppRouter.Task} component={TaskScreen} />
      <Tab.Screen name={AppRouter.Request} component={RequestScreen} />
    </Tab.Navigator>
  );
};
