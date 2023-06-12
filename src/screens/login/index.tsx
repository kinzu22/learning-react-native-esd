import React, {useState} from 'react';
import {Dimensions, View, Text, Image, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import TextBox from '../../components/TextBox';
import CustomButton from '../../components/CustomButton';
import TextBoxPassword from '../../components/TextBoxPassword';
import {
  PhosphorLeftIcon,
  PhosphorRightIcon,
  AccountIcon,
} from '../../../assets';
import styles from './styles';

const LoginScreen = () => {
  // Khởi tạo
  const {height, width} = Dimensions.get('window');

  const [rememberState, setRememberState] = useState(true);

  // HOOKS

  // function api

  // function validate

  // function helper

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/images/logo/HPT-logo.png')}
          resizeMode="stretch"
          style={styles.logo}
        />
        <Text style={styles.title}>Quản lý tài sản</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.loginText}>Đăng nhập</Text>
        <TextBox
          title="Domain"
          placeholder="Chọn domain"
          leftIcon={<PhosphorLeftIcon width={16} height={16} />}
          rightIcon={<PhosphorRightIcon width={16} height={16} />}
        />
        <TextBox
          title="Tài khoản"
          placeholder="Nhập tài khoản"
          leftIcon={<AccountIcon width={16} height={16} />}
        />
        <TextBoxPassword title="Mật khẩu" placeholder="Nhập mật khẩu" />
        <View style={styles.rememberView}>
          <CheckBox
            disabled={false}
            value={rememberState}
            onValueChange={() => {
              setRememberState(!rememberState);
            }}
            style={styles.rememberCheckBox}
          />
          <Text style={styles.rememberText}>Ghi nhớ tài khoản</Text>
        </View>
        <CustomButton title="Đăng nhập" />
        <TouchableOpacity
          onPress={() => {
            console.log('dang ky');
          }}>
          <Text style={[styles.link, styles.forgotPassword]}>
            Quên mật khẩu
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Text>Bạn chưa có tài khoản?</Text>
        <TouchableOpacity
          onPress={() => {
            console.log('dang ky');
          }}>
          <Text style={styles.link}> Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
