// ChooseAvatar.js
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

// Assuming GenderImage component exists and correctly handles gender props to display different images
import GenderImage from './GenderImage';

const ChooseAvatar = () => {//Add something for it to say something like this is you [NAME] LUKE!!!! ALSO SAVE IMAGE
  const navigation = useNavigation();
  const [gender, setGender] = useState('');

  useEffect(() => {
    const fetchGender = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@PlayerData');
        const data = jsonValue != null ? JSON.parse(jsonValue) : null;
        if (data && data.gender) {
          setGender(data.gender);
        }
      } catch (e) {
        console.log('Failed to fetch the data from storage', e);
        Alert.alert("Error", "Failed to retrieve your character's profile.");
      }
    };

    fetchGender();
  }, []);
  const handleLogout = () => {
    // Here you can implement logout logic if needed
    // For simplicity, this example just navigates back to the Login screen
    navigation.navigate("Login");
  };

  const handleNext = () => {
    navigation.navigate('Scene1'); // Make sure 'Scene1' is a valid route in your navigation setup
  };

  return (

      
 

    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* Display gender-specific image or a default message if gender is not set */}
        {gender ? (
          <GenderImage gender={gender.toLowerCase()} />
        ) : (
          <Text>No gender selected.</Text>
        )}

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
    logout: {
      position: 'absolute',
      top:5,
      right:10,
      height: 40,
      
    },
    topCorner: {
      position: 'absolute',
      top:5,
      left:10,
      fontWeight: 'bold',
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
      top: 100
    },
    optionText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    question: {
      fontSize: 18,
      fontWeight: 'bold',
      top:100
    },
 
     
      content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      },
      
      input: {
        borderWidth: 1,
        borderColor: '#ced6e0',
        backgroundColor: 'white',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        top:30,
        width: '100%',
        marginBottom: 20,
        fontFamily: 'Times New Roman',
      },
      button: {
        backgroundColor: '#487eb0',
        borderRadius: 8,
        padding: 16,
        width: '100%',
        top:-40,
        alignItems: 'center',
      },
      buttonText: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Times New Roman',
      },
  });

// ... styles remain unchanged
export default ChooseAvatar;