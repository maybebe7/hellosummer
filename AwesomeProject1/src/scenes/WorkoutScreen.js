import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import workoutsData from '../data/workouts.json';
import exercisesData from '../data/exercises.json';
import styles from '../styles/WorkoutStyles';

const WorkoutScreen = () => {

console.log ("rending Workouts");

  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    setWorkouts(workoutsData);
    setLoading(false);
  }, []);

  const getExerciseNames = (exercises) => {
    const names = exercises.map((id) => {
      const exercise = exercisesData.find((e) => e._id === id);
      return exercise ? exercise.name : '';
    });
    return names.join(', ');
  };



  const renderWorkout = ({ item }) => (
    <TouchableOpacity
      key={item._id}
      style={styles.card}
      onPress={() =>
        navigation.navigate('Exercises', { exercises: item.exercises })
      }
    >
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.exercises}>{getExerciseNames(item.exercises)}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={workouts}
          renderItem={renderWorkout}
          keyExtractor={(item) => item._id.toString()}
        />
      )}
    </View>
  );
};

export default WorkoutScreen;
