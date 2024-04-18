import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';
import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';
import Sound from 'react-native-sound';
import { useNavigation } from '@react-navigation/native';

type FadeInViewProps = PropsWithChildren<{ style: ViewStyle }>;

const FadeInView: React.FC<FadeInViewProps> = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000, // Adjust duration as needed
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};


const Scene1 = () => {
  const navigation = useNavigation();
  
  // Script with dialogue and choices
  const script = [
    { type: 'dialogue', text: "Alex: Good morning, everyone! Welcome to what will be some of the most memorable years of your lives. I'm Alex, a senior here, and I'll be your guide today. We’re thrilled to have you join our university family!" },
    { type: 'dialogue', text: "Alex: Here, you'll face choices that shape your future. Today's no different. We’ve organized two fantastic opportunities for you to start off on the right foot. First, an academic seminar designed to equip you with essential skills for your studies. And second, a campus tour that not only shows you around but also helps you meet fellow students and make early connections." },
    { type: 'dialogue', text: "Alex: So, what’s it going to be? Will you dive into the academic side and get a head start on your classes? Or will you take this chance to explore the campus and start building your social network?" },
    {
      type: 'choices', options: [
        { id: '1', text: "Academic Seminar: 'I’m here to excel academically. I'll attend the seminar.'" },
        { id: '2', text: "Campus Tour: 'I want to see what campus life has to offer and meet new people.'" },
        { id: '3', text: "Skip Both Events: 'I think I'll skip these. Today feels like a day to relax on my own.'" },
        { id: '4', text: "Wander Alone: 'I prefer discovering the campus by myself. Who knows what I’ll find?'" }
      ]
    }
  ];
  const collegPic = require("./Images/COLLEGEOrientation2.jpg");
  const alexPic = require("./Images/ALEX.png");
  //const playerPic = require("./Player.png");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [choiceMade, setChoiceMade] = useState(false);

  const sound = new Sound('./2.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.log('Failed to load the sound', error);
      return;
    }
  });
  sound.play((success) => {
    if (success) {
      console.log('Sound played successfully');
    } else {
      console.log('Failed to play the sound');
    }
  });//Test for sound :(

  const advanceScript = () => {
    if (currentIndex < script.length - 1 && !choiceMade) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleChoice = (choiceId: string) => {
    console.log("Choice selected:", choiceId);
    if(choiceId==1){
      navigation.navigate("AcademicSeminar");
    }else if(choiceId==2){
      navigation.navigate("CampusTour");
    }else if(choiceId==3){
      navigation.navigate("DormIntro");
    }else if(choiceId==4){
      navigation.navigate("WanderAlone");
    }
  };

  return (
    <View style={styles.screenContainer}>
      <Image source={collegPic} style={{ width: 400, height: 350, alignSelf: 'center', position: 'absolute', top: 50 }}></Image>

      <FadeInView
        style={{
          width: 250,
          height: 250,
          backgroundColor: 'transparent', // Set background to transparent for Image
        }}>
        <Image
          source={alexPic} // Replace with your image source
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            resizeMode: 'contain', // Adjust resizeMode as needed
          }}
        />
      </FadeInView>

      {(currentIndex !== 3 && script[currentIndex].type === 'dialogue') && (
        <TouchableOpacity onPress={advanceScript} style={styles.dialogueBox}>
          <Text style={styles.dialogueText}>{script[currentIndex].text}</Text>
        </TouchableOpacity>
      )}

      {script[currentIndex].type === 'choices' && !choiceMade && (
        script[currentIndex].options.map((option) => (
          <TouchableOpacity key={option.id} onPress={() => handleChoice(option.id)} style={styles.choiceContainer}>
            <Text style={styles.choiceText}>{option.text}</Text>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};


const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Keeps the dialogue box at the bottom
    backgroundColor: '#fff',
  },
  dialogueBox: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    marginBottom: 20, // Margin from the bottom
    alignSelf: 'stretch', // Stretch box to match parent width
    marginHorizontal: 20, // Margin from the left and right
  },
  dialogueText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left', // Align text to the left
  },
  choicesContainer: {
    // This container ensures that the choices are rendered at the top.
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  choiceContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 5,
    backgroundColor: '#f8f8f8',
    marginHorizontal: 20,
    // The shadow and elevation properties give the choices a raised look.
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  choiceText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'left', // Align text to the left
  },
});

export default Scene1;

