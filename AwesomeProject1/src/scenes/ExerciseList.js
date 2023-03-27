import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/ProgramsStyles';

const ExerciseList = ({ route }) => {
  const { trainingId, day } = route.params;

  return (
    <View>
      <Text>Program ID: {trainingId}</Text>
      <Text>Day: {day}</Text>
    </View>
  );
};

export default ExerciseList;
