import React from 'react';
import {View, Text, Button} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// import {AppRouter} from '../../navigations/AppRouter';
import {styles} from './style';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: 'black'}}>Home Screen</Text>
      <Button
        title="Go to Login Screen"
        // onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default HomeScreen;
