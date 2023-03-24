import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from './scenes/Login';
import Main from './scenes/Main';
import Profile from './scenes/Profile';
import Programs from './scenes/Programs';

const Stack = createStackNavigator();

const App = () => {
  console.log('rendering Navigation');

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={Main} options={{ headerShown: false }} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
        <Stack.Screen name="Programs" component={Programs} options={{ title: 'Programs' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
