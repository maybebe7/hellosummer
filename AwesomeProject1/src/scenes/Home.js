import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeStyles';
import { useNavigation } from '@react-navigation/native';


const Home = () => {

const navigation = useNavigation();

return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
    </View>
  );
};

export default Home;