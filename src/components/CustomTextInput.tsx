import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

interface CustomTextInputProps extends TextInputProps {}

const CustomTextInput: React.FC<CustomTextInputProps> = props => {
  return <TextInput {...props} style={styles.customTextInput} />;
};

const styles = StyleSheet.create({
  customTextInput: {
    width: 350,
    height: 36,
    paddingLeft: 22,
    paddingRight: 34,
    fontSize: 14,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderWidth: 0,
  },
});

export default CustomTextInput;
