import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const GameManagementScreen = () => {
  const navigation = useNavigation();

  const createGame = async () => {
    // Navigate to the Prologue screen
    navigation.navigate("PrologueScreen");
  };

  const loadGame = async () => {
    try {
      // Attempt to retrieve the stored player data and last scene ID
      const playerData = await AsyncStorage.getItem('@PlayerData');
      const sceneId = await AsyncStorage.getItem('@LastSceneId');
      if (playerData !== null && sceneId !== null) {
        // Navigate to the saved scene with the retrieved player data
        navigation.navigate(sceneId, { playerData: JSON.parse(playerData) });
      } else {
        // Handle case where there is no game data saved
        Alert.alert("No game found", "Please create a new game.");
      }
    } catch (e) {
      Alert.alert("Error", "Failed to load the game.");
      console.error('Failed to retrieve the game data', e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      <TouchableOpacity style={styles.button} onPress={createGame}>
        <Text style={styles.buttonText}>Create Game</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={loadGame}>
        <Text style={styles.buttonText}>Load Game</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f6fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#487eb0',
    padding: 20,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default GameManagementScreen;
