import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/WorkoutStyles';
import { useNavigation } from '@react-navigation/native';
import workouts from '../data/workouts';


const WorkoutScreen = () => {

/*const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Workout Screen</Text>
    </View>
  );
};

export default WorkoutScreen; */

  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        workouts.map((workout) => (
          <TouchableOpacity
            key={workout._id}
            style={styles.card}
            onPress={() =>
              navigation.navigate('Exercises', { exercises: workout.exercises })
            }
          >
            <Text style={styles.title}>{workout.name}</Text>
            <Text style={styles.description}>{workout.description}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

export default WorkoutScreen;

