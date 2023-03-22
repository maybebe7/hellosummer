import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/ProfileStyles';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/atoms/Button';


const Profile = () => {

const navigation = useNavigation();

  const handleLogout = () => {
    // Clear user data and tokens here, if necessary

    // Navigate to the Login screen
    navigation.navigate('Login');
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button onPress={handleLogout}>Logout</Button>
    </View>
  );
};

export default Profile;
