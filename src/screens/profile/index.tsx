import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const ProfileScreen = () => {
  // Khởi tạo
  // const {height, width} = Dimensions.get('window');

  // const [rememberState, setRememberState] = useState(true);

  // HOOKS
  const navigation = useNavigation();
  // const router = useRoute();
  // const {data} = router.params;
  // console.log('router', data);
  const goBack = () => {
    navigation.goBack();
  };
  // function api

  // function validate

  // function helper

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>Go back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;
