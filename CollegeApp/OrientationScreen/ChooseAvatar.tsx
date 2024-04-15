import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Platform, Alert, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

import GenderImage from './GenderImage';

const ChooseAvatar = () => {
  const navigation = useNavigation();
  const [playerData, setPlayerData] = useState({ name: '', gender: '', avatar: null });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@PlayerData');
        const data = jsonValue != null ? JSON.parse(jsonValue) : { name: '', gender: '', avatar: null };
        setPlayerData(data);
      } catch (e) {
        console.log('Failed to fetch the data from storage', e);
        Alert.alert("Error", "Failed to retrieve your character's profile.");
      }
    };

    fetchData();
  }, []);

  const handleSelectAvatar = async (avatarId) => {
    try {
      const updatedData = { ...playerData, avatar: avatarId };
      await AsyncStorage.setItem('@PlayerData', JSON.stringify(updatedData));
      setPlayerData(updatedData);
    } catch (e) {
      console.log('Failed to save the avatar to storage', e);
      Alert.alert("Error", "Failed to save the avatar.");
    }
  };

  const handleNext = () => {
    if (playerData.avatar) {
      Alert.alert("Confirm Avatar", "Do you want to proceed with this avatar?", [
        { text: "Cancel", style: "cancel" },
        { text: "Yes", onPress: () => navigation.navigate('Scene1') }
      ]);
    } else {
      Alert.alert("No Avatar Selected", "Please select an avatar before proceeding.");
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Hi {playerData.name}, choose your avatar:</Text>
        {playerData.gender ? (
          <GenderImage gender={playerData.gender.toLowerCase()} onSelect={handleSelectAvatar} />
        ) : (
          <Text>Please go back and select a gender to see avatars.</Text>
        )}
        <Button title="Next" onPress={handleNext} />
      </View>
    </KeyboardAvoidingView>
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
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default ChooseAvatar;
