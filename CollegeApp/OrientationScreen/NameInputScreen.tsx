// NameInputScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';

const NameInputScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const NameImage=require("./WhoWillYouBe.jpg");
  const GreyBoxImage=require("./GREYBOX.png");
  const WhiteBoxImage=require("./WhiteBox.png");
  const handleNext = () => {
    // Pass the name to the next screen (GenderSelectionScreen) using navigation params
    navigation.navigate('GenderSelectionScreen');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.content}>
      <Image source={NameImage} style={{width: 600, height: 350, alignSelf: 'center',position: 'absolute',top: 0}}></Image>
      <Image source={WhiteBoxImage} style={{width: 420, height: 100, alignSelf: 'center',position: 'absolute',top: 220}}></Image>
        <Text style={styles.question}>In a world where every name carries the weight of unseen stories, what name echoes within you?</Text>
        <TextInput
          style={styles.input}
          onChangeText={setName}
          value={name}
          placeholder="Enter your character's name"
          placeholderTextColor="#666"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  question: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 24,
    fontFamily: 'Times New Roman', // iOS default serif font
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
    top:20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Times New Roman',
  },
  // If Times New Roman is not available or if you're targeting Android, consider a similar serif font or use the default sans-serif.
});

export default NameInputScreen;
