import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../styles/ProgramsStyles';

const ProgramDetails = ({ route, navigation }) => {

  console.log("rendering Programs Details");
  const { workoutId, workoutName } = route.params;
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://wger.de/api/v2/day/?training=${workoutId}`, {
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Token 0de69ee316a5379fc468093947af6747bc74b2ae'
      }
    })
      .then(response => response.json())
      .then(data => {
        setTrainings(data.results);
        setLoading(false);
        navigation.setOptions({ title: workoutName });
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  }, [workoutId]);

  const handleTrainingPress = (training) => {
    navigation.navigate('ExerciseList', {
      trainingId: training.training,
      day: training.day[0],
    });
  };

  const renderTraining = (training) => {
    return (
      <TouchableOpacity
        key={training.id}
        style={styles.card}
        onPress={() => handleTrainingPress(training)}
      >
        <Text style={styles.title}>{training.description}</Text>
        <Text style={styles.day}>{`Day ${training.day[0]}`}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView>
          {trainings.map((training) => renderTraining(training))}
        </ScrollView>
      )}
    </View>
  );
};

export default ProgramDetails;
