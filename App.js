import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import exercises from "./assets/data/exercises.json";


export default function App() {
  const exercise = exercises[1]


  return (
    <View style={styles.container}>
      <FlatList 
        data={exercises}
        renderItem={({item}) => 
          (
            <View style={styles.exerciseContainer}>
            <Text style={styles.exerciseName}>{item.difficulty}</Text>
            <Text style={styles.exerciseSubtitle}> {item.muscle.toUpperCase()} | {item.equipment.toUpperCase()}</Text>
            </View>
          )
        } 
      />
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gainsboro',
    justifyContent: 'center',
    padding: 10,
  },
  exerciseName:{
    fontSize: 20,
    fontWeight: '500',
  },
  exerciseSubtitle: {
    color: 'dimgray'
  },
  exerciseContainer:{
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    gap: 5,
  }
});
