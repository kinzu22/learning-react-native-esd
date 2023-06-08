import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import TextBox from '../components/TextBox';
import CustomButton from '../components/CustomButton';
import TextBoxPassword from '../components/TextBoxPassword';
import {PhosphorLeftIcon, PhosphorRightIcon, AccountIcon} from '../../assets';

const Screen = () => {
  const [rememberState, setRememberState] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../assets/images/logo/HPT-logo.png')}
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
          <Text style={styles.link}>Đăng ký</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 22,
  },
  logo: {
    width: 152,
    height: 77,
  },
  title: {
    fontSize: 32,
    lineHeight: 48,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#323842FF',
  },
  body: {
    flex: 7,
    marginVertical: 20,
    justifyContent: 'center',
  },
  loginText: {
    fontSize: 20,
    lineHeight: 30,
    color: '#565E6CFF',
  },
  dangNhapBtn: {
    marginTop: 20,
  },
  rememberView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {fontSize: 14, lineHeight: 22, marginLeft: 10},
  rememberCheckBox: {borderColor: 'black'},
  footer: {
    flex: 1,
    marginVertical: 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    fontSize: 14,
    lineHeight: 22,
    textAlign: 'center',
    color: '#00BDD6FF',
  },
  forgotPassword: {
    marginTop: 10,
  },
});

export default Screen;
