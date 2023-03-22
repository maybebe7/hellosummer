import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import styles from '../styles/ExerciseStyles';
import workouts from '../data/workouts';
import exercises from '../data/exercises';
import ExerciseTable from '../components/atoms/ExerciseTable';

const Exercises = ({ route }) => {
  const { exercises: exerciseIds } = route.params;

  const [collapsed, setCollapsed] = useState(true);

  const getExerciseDetails = (id) => {
    const exercise = exercises.find((e) => e._id === id);
    if (!exercise) {
      //console.log(`Exercise with _id ${id} not found`);
    }
    return exercise;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {exerciseIds.map((id, index) => {
          const exercise = getExerciseDetails(id);

          return (
            <TouchableOpacity
              key={index}
              style={[styles.exercise, { marginBottom: collapsed ? 10 : 0 }]}
              onPress={() => setCollapsed(!collapsed)}
            >
              <Text style={styles.title}>{exercise.name}</Text>
              <Text style={styles.setsReps}>{`${exercise.sets} sets x ${exercise.reps} reps`}</Text>
              {collapsed ? null : (
                <View style={styles.details}>
                  <ExerciseTable sets={exercise.sets} />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Exercises;
