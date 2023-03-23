import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from './scenes/Login';
import Main from './scenes/Main';
import Profile from './scenes/Profile';
import Exercises from './scenes/Exercises';

const Stack = createStackNavigator();

const App = () => {
  console.log('rendering Navigation');

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          ...TransitionPresets.SlideFromRightIOS,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Profile" component={Profile} options={{ title: 'Profile' }} />
        <Stack.Screen name="Exercises" component={Exercises} options={{ title: 'Exercises' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
