import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import TextBox from '../components/TextBox';
import CustomButton from '../components/CustomButton';

const Screen = () => {
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
        <TextBox title="Domain" placeholder="Chọn domain" />
        <TextBox title="Tài khoản" placeholder="Nhập tài khoản" />
        <TextBox title="Mật khẩu" placeholder="Nhập mật khẩu" />
        <View style={{marginTop: 28}}>
          <CheckBox
            disabled={false}
            value={true}
            onValueChange={() => {
              console.log('ghi nho tai khoan');
            }}
          />
          <Text style={{fontSize: 14, lineHeight: 22}}>Ghi nhớ tài khoản</Text>
        </View>
        <CustomButton title="Đăng nhập" />
        <TouchableOpacity
          onPress={() => {
            console.log('dang ky');
          }}>
          <Text style={styles.link}>Quên mật khẩu</Text>
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
  footer: {
    marginVertical: 20,
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
});

export default Screen;
