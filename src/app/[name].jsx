import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import exercises from '../../assets/data/exercises.json'
import {Stack} from 'expo-router';
import { useState } from "react";

export default function ExerciseDetailsScreen(){
    const params = useLocalSearchParams();
    const exercise = exercises.find((item) => item.name == params.name)
    const [isInstructionExpanded, setisInstructionExpanded] = useState(false);
    if(!exercise){
        return (
            <Text>Exercise not found</Text>
        )
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
          <Stack.Screen options={{title: exercise.name}}/>
          <View style={styles.panel}>
              <Text style={styles.exerciseName}>{exercise.name}</Text>
              <Text style={styles.exerciseSubtitle}> <Text style={styles.subValue}>{exercise.muscle}</Text> | <Text style={styles.subValue}>{exercise.equipment}</Text></Text>
          </View>
          <View style={styles.panel}>
              <Text style={styles.instructions} numberOfLines={isInstructionExpanded ? 0 : 3}>{exercise.instructions} </Text>
              <Text onPress={() =>  setisInstructionExpanded(!isInstructionExpanded) } style={styles.seeMore}>
                {isInstructionExpanded? 'See less' : 'See more'}
              </Text>
          </View>
             
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        gap: 10,
    },
    exerciseName:{
      fontSize: 20,
      fontWeight: '500',
    },
    exerciseSubtitle: {
      color: 'dimgray'
    },
    subValue: {
      textTransform: 'capitalize',
    },
    instructions:{
      fontSize: 16,
      lineHeight: 22,
    },
    panel:{
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
    },
    seeMore:{
      alignSelf: 'center',
      padding: 10,
      fontWeight: '600',
      color: 'gray',
    }
    
  });
   