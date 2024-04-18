import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const  prologueTexts = [
  "Narrator: In the heart of a world brimming with possibilities, where dreams are nurtured and destinies are forged, lies the gateway to an adventure unlike any other—a journey through the hallowed halls of college life. Here, at the crossroads of the future, every choice echoes into the vast unknown, shaping the path of what’s to come. But be wary, for not all paths lead to light.",
  "Narrator: Welcome to University Life, where the vibrant tapestry of experiences weaves the story of you. Beyond these gates lies not just a path to academic achievement but a playground for the soul, a battleground for the heart, and a forge for the spirit. And amidst it all, shadows linger, offering choices that may lead you down darker, unforeseen paths.",
  "Narrator: You are about to embark on a journey of discovery, where lessons extend far beyond the classrooms, into the very essence of life itself. Here, friendships are born, wisdom is gained, identities are shaped, and sometimes, the cost of a choice is more than what it seems. You will face trials and triumphs, make allies and adversaries, navigate the myriad choices that define the college saga, and confront the consequences of straying too close to the edge.",
  "Narrator: As the sun rises on your first day, who will you choose to be? Will you tread the path of diligence, with eyes firmly set on academic accolades? Or will the allure of social endeavors and the quest for self-discovery tempt you into the shadows? Perhaps you’ll find a balance, or maybe you'll explore the depths to emerge wiser, stronger. Every step, every decision, every moment spent in pursuit of your future, is a step along a path of your own making. But remember, the brightest light casts the darkest shadow.",
  "Narrator: The choices are yours, and the pages of this chapter are yet unwritten. Embrace the journey, with all its light and shadows, for it is the canvas upon which your college experience will be painted. In the end, it’s not just about the destination, but the journey… and every choice, every challenge, every triumph and trial, begins now.",
  "Narrator: So, who will you be? And where will your choices lead you?"
];

const PrologueScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();
  const ProlougeIMg=require("./Images/ProloguePic.jpg");

  const handleTextPress = () => {
    if (currentIndex <  prologueTexts.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Here you could navigate to the next part of your app, e.g., the main menu
      navigation.navigate('NameInputScreen');
    }
  };

  const handleLogout = () => {
    // Here you can implement logout logic if needed
    // For simplicity, this example just navigates back to the Login screen
    navigation.navigate("Login");
  };

  return (
    
    <View style={styles.container}>
       <Text style={styles.topCorner}>SWE Capstone Team NULL</Text>
      
      <View style={styles.logout}>
        <Button title="Logout" onPress={handleLogout} />
      </View>
      <Image source={ProlougeIMg} style={{width: 600, height: 350, alignSelf: 'center',position: 'absolute',top: 50}}>

      </Image>
      <TouchableOpacity style={styles.textContainer} onPress={handleTextPress}>
        <Text style={styles.text}>{ prologueTexts[currentIndex]}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    padding: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    top: 20,
    fontWeight: 'bold',
  },

  button: {
    fontSize: 24,
    marginBottom: 20,
    padding: 0,
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
  }
});

export default  PrologueScreen;
