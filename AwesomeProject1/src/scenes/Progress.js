import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/ProgressStyles';
import { useNavigation } from '@react-navigation/native';

const Progress = () => {

const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Progress Screen</Text>
    </View>
  );
};

export default Progress;