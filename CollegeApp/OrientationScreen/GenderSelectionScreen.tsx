import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'; // Ensure this is imported

const GenderSelectionScreen = ({ route }) => {
  const navigation = useNavigation(); // Use the useNavigation hook if not directly receiving the navigation prop
  const { name } = route.params; // Retrieve the name from route params
  const genderPic = require("./GenderIMG.jpeg");

  const savePlayerData = async (gender) => {
    try {
      const playerData = JSON.stringify({ name, gender });
      await AsyncStorage.setItem('@PlayerData', playerData);
      // Proceed to the next scene after saving
      Alert.alert("Success", "Your character's profile has been saved!", [
        { text: "OK", onPress: () => navigation.navigate('Scene1') } // Use navigation.navigate to move to the next scene
      ]);
    } catch (e) {
      console.log('Failed to save the data to storage', e);
      Alert.alert("Error", "Failed to save your character's profile.");
    }
  };

  const selectGender = (gender) => {
    // Save player data and navigate or proceed to the next action
    savePlayerData(gender);
  };

  return (
    <View style={styles.container}>
      <Image source={genderPic} style={{width: 600, height: 350, alignSelf: 'center', position: 'absolute', top: 0}}></Image>
      <Text style={styles.question}>Hi {name}, in this world of endless narratives, how does your character's essence manifest?</Text>
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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
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
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default GenderSelectionScreen;
