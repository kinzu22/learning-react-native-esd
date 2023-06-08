import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

type CustomButton = {
  title: string;
  placeholder?: string;
};

const CustomButton = (props: CustomButton) => {
  return (
    <TouchableOpacity style={styles.styleTouchableOpacity}>
      <Text style={styles.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  styleTouchableOpacity: {
    marginTop: 20,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00BDD6FF',
    borderRadius: 4,
    hoverBackgroundColor: '#00A9C0FF',
  },
  title: {
    fontSize: 16,
    lineHeight: 26,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

export default CustomButton;
