import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import styles from '../styles/LoginStyles';

import Realm from 'realm';
import atlasConfig from '../atlasConfig.json';

const Login = () => {
  const navigation = useNavigation();
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const appConfig = {
        id: atlasConfig.appId,
        timeout: 10000,
      };
      const app = new Realm.App(appConfig);

      // Authenticate the user
      const credentials = Realm.Credentials.emailPassword(
        email,
        password
      );
      const user = await app.logIn(credentials);

      // Navigate to the main screen
      navigation.navigate('Main');
    } catch (error) {
      console.error('Failed to log in', error);
    }
  };

  const handleGuestLogin = async () => {
    try {
      const appConfig = {
        id: atlasConfig.appId,
        timeout: 10000,
      };
      const app = new Realm.App(appConfig);

      // Authenticate the user as an anonymous guest
      const user = await app.logIn(Realm.Credentials.anonymous());

      // Navigate to the main screen
      navigation.navigate('Main');
    } catch (error) {
      console.error('Failed to log in as guest', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Input
        placeholder="Email"
        onChangeText={setUsername}
        value={email}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button onPress={handleLogin}>Login</Button>
      <Button onPress={handleGuestLogin}>Login as Guest</Button>
    </View>
  );
};

export default Login;
