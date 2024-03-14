// GenderSelectionScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GenderSelectionScreen = ({ route, navigation }) => {
  const { name } = route.params; // Retrieve the name from route params

  const selectGender = (gender) => {
    // Here you can navigate to the next screen and pass both name and gender
   navigation.navigate('Screen1', { name, gender });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>In this world of endless narratives, how does your character's essence manifest?</Text>
      <View style={styles.optionsContainer}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => selectGender('Male')}>
          <Text style={styles.optionText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => selectGender('Female')}>
          <Text style={styles.optionText}>Female</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.option}
          onPress={() => selectGender('Non-binary')}>
          <Text style={styles.optionText}>Non-binary</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    optionsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    option: {
      backgroundColor: '#f0f0f0',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 8,
    },
    optionText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

// ... styles remain unchanged
export default GenderSelectionScreen;