import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from './scenes/Login';
import Main from './scenes/Main';
import Profile from './scenes/Profile';
import ProgramDetails from './scenes/ProgramDetails';
import ExerciseList from './scenes/ExerciseList';

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
        <Stack.Screen name="ProgramDetails" component={ProgramDetails} options={{ title: 'Program Details' }} />
        <Stack.Screen name="ExerciseList" component={ExerciseList} options={{ title: 'Exercise List' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
