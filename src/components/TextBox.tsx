import React from 'react';
import {StyleSheet, TextInput, View, Text, ViewStyle} from 'react-native';

type TextBoxProps = {
  title: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  style?: ViewStyle;
  leftIcon?: React.JSX.Element;
  rightIcon?: React.JSX.Element;
};

const TextBox = (props: TextBoxProps) => {
  return (
    <View style={(props.style, styles.container)}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.inputLine}>
        {props.leftIcon}
        <TextInput
          placeholder={props.placeholder}
          style={styles.textInput}
          secureTextEntry={props.secureTextEntry}
        />
        {props.rightIcon}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: '#9095a0',
    marginTop: 20,
  },
  title: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '500',
  },
  inputLine: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    height: 36,
    paddingLeft: 22,
    paddingRight: 34,
    // marginTop: 20,
    fontSize: 14,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderWidth: 0,
  },
});

export default TextBox;
