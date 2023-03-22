import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import Login from './scenes/Login';
import Main from './scenes/Main';
import Profile from './scenes/Profile';
import WorkoutScreen from './scenes/WorkoutScreen';
import Exercises from './scenes/Exercises';
import { workouts } from './data/workouts';

const modules = require.getModules();
const moduleIds = Object.keys(modules);
const loadedModuleNames = moduleIds
  .filter(moduleId => modules[moduleId].isInitialized)
  .map(moduleId => modules[moduleId].verboseName);
const waitingModuleNames = moduleIds
  .filter(moduleId => !modules[moduleId].isInitialized)
  .map(moduleId => modules[moduleId].verboseName);

// make sure that the modules you expect to be waiting are actually waiting
console.log(
  'loaded:',
  loadedModuleNames.length,
  'waiting:',
  waitingModuleNames.length,
);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
        freezeOnBlur: true,
        cardOverlayEnabled: true,
        ...TransitionPresets.SlideFromRightIOS, }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
        <Stack.Screen
          name="WorkoutScreen"
          component={WorkoutScreen}
          options={{ title: 'Workouts' }}
          initialParams={{ workouts }}
        />
        <Stack.Screen
          name="Exercises"
          component={Exercises}
          options={{ title: 'Exercises' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
