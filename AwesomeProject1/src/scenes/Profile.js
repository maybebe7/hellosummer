import React, {useCallback} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/ProfileStyles';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/atoms/Button';

//realm
import { useUser } from '@realm/react';


const Profile = () => {

const user = useUser();
const navigation = useNavigation();

  const signOut = useCallback(() => {
      user?.logOut();
    }, [user]);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Button onPress={signOut}>Logout</Button>
    </View>
  );
};

export default Profile;
