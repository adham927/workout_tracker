import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import exercises from "./assets/data/exercises.json";
import ExercisesListItem from './src/components/ExercisesListItem';


export default function App() {
  const exercise = exercises[1]

  return (
    <View style={styles.container}>
      <FlatList 
        data={exercises}
        contentContainerStyle={{gap: 5}}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({item}) => 
          <ExercisesListItem  item = {item} />      } 
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
    paddingTop: 30,
  }
});
