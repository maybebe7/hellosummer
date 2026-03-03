import React, { useState, useEffect, useContext } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../styles/ProgramsStyles';

import Realm from 'realm';
import atlasConfig from '../atlasConfig.json';
import { realmContext } from '../RealmContext';

const WorkoutScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [workouts, setWorkouts] = useState([]);
  const { app, collection } = realmContext;

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        // Log in to the Realm app
        const user = await app.logIn(Realm.Credentials.anonymous());

        // Fetch the user's programs from the collection
        const results = await collection('programs').find();

        setWorkouts(results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, []);

  const renderWorkout = ({ item }) => (
    <TouchableOpacity
      key={item._id.toString()}
      style={styles.card}
      onPress={() => navigation.navigate('ProgramDetails', { workoutId: item._id.toString(), workoutName: item.name })}
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
          keyExtractor={(item) => item._id.toString()}
        />
      )}
    </View>
  );
};

export default WorkoutScreen;
