import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/HomeStyles';
import Progress from '../scenes/Progress';
import Home from '../scenes/Home';
import WorkoutScreen from '../scenes/WorkoutScreen';


const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
    initialRouteName="Workout"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = 'home-outline';
        } else if (route.name === 'WorkoutScreen') {
          iconName = 'barbell-outline';
        } else if (route.name === 'Progress') {
          iconName = 'stats-chart-outline';
        }
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#e91e63'
    })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
        tabBarLabel:() => {return null},
          headerRight: () => (
            <Icon
              name="person-circle-outline"
              size={30}
              color="#000"
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Profile')}
            />
          ),
        })}
        lazy={true}
      />
      <Tab.Screen
              name="WorkoutScreen"
              component={WorkoutScreen}
              options={({ navigation }) => ({
              headerTitle: 'My Workouts',
              tabBarLabel:() => {return null},
                headerRight: () => (
                  <Icon
                    name="person-circle-outline"
                    size={30}
                    color="#000"
                    style={{ marginRight: 15 }}
                    onPress={() => navigation.navigate('Profile')}
                  />
                ),
              })}
              lazy={true}
            />
      <Tab.Screen
        name="Progress"
        component={Progress}
        options={({ navigation }) => ({
        headerTitle: 'My Progress',
        tabBarLabel:() => {return null},
          headerRight: () => (
            <Icon
              name="person-circle-outline"
              size={30}
              color="#000"
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Profile')}
            />
          ),
        })}
        lazy={true}
      />
    </Tab.Navigator>
  );
};

export default Main;
