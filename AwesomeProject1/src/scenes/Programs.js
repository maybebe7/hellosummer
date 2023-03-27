import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/ProgramsStyles';

const WorkoutScreen = () => {
  console.log("rendering Programs");
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://wger.de/api/v2/workout/', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Token 0de69ee316a5379fc468093947af6747bc74b2ae'
      }
    })
      .then(response => response.json())
      .then(data => {
        setWorkouts(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, []);

const renderWorkout = ({ item }) => (
  <TouchableOpacity
    key={item.id}
    style={styles.card}
    onPress={() => navigation.navigate('ProgramDetails', { workoutId: item.id, workoutName: item.name })}
  >
    <Text style={styles.title}>{item.name}</Text>
    <Text style={styles.description}>{item.description}</Text>
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
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

export default WorkoutScreen;
