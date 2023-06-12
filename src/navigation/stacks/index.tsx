import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/login';
import HomeScreen from '../../screens/home';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Home', animationEnabled: false, header: () => null}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{title: 'Login', animationEnabled: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
