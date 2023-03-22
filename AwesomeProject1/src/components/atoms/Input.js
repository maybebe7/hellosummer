import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = (props) => {
  return <TextInput style={styles.input} placeholderTextColor="#8c8c8c" {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black',
  },
});

export default Input;
