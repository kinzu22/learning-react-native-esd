import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
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
  rememberView: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rememberText: {fontSize: 14, lineHeight: 22, marginLeft: 10},
  rememberCheckBox: {borderColor: 'black'},
  footer: {
    height: 50,
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

export default styles;
