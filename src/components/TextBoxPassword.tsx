import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {PasswordIcon, ShowPasswordIcon} from '../../assets';

type TextBoxPasswordProps = {
  title: string;
  placeholder?: string;
  style?: ViewStyle;
  leftIcon?: React.JSX.Element;
  rightIcon?: React.JSX.Element;
};

const TextBoxPassword = (props: TextBoxPasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <View style={(props.style, styles.container)}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.inputLine}>
        <PasswordIcon width={16} height={16} />
        <TextInput
          placeholder={props.placeholder}
          style={styles.textInput}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity onPress={handleTogglePasswordVisibility}>
          <ShowPasswordIcon width={16} height={16} />
        </TouchableOpacity>
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
    paddingLeft: 18,
    paddingRight: 34,
    fontSize: 14,
  },
});

export default TextBoxPassword;
