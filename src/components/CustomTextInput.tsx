import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

interface CustomTextInputProps extends TextInputProps {

}

const CustomTextInput: React.FC<CustomTextInputProps> = (props) => {
  return (
    <TextInput {...props} />
  )
}
export default CustomTextInput;