
import { StyleSheet, Text, View } from 'react-native';


export default function ExercisesListItem({item}){
    return (
      <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.difficulty}</Text>
      <Text style={styles.exerciseSubtitle}> <Text style={styles.subValue}>{item.muscle}</Text> | <Text style={styles.subValue}>{item.equipment}</Text></Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
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
    },
    subValue: {
      textTransform: 'capitalize'
    }
  });
   