import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import styles from '../styles/LoginStyles';

const Login = () => {

console.log ("rending Login");

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
   navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder="Username"
        onChangeText={setUsername}
        value={username}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button onPress={handleLogin}>Login</Button>
    </View>
  );
};

export default Login;